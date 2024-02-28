module.exports = {
  rules: {
    meta: {
      type: 'error', // This rule identifies a potential error.
      docs: {
        description:
          "Ensure that HttpModule is used with a 'register' method including a 'timeout' property in @Module imports. HttpModule.register({ timeout: 30000 })",
      },
      fixable: null, // or "code" or "whitespace"
    },
    error: function (context) {
      return {
        // Target the object expression within the @Module decorator
        "Decorator[expression.callee.name='Module'] ObjectExpression": function (node) {
          const importsProperty = node.properties.find(
            (property) =>
              property.key.name === 'imports' &&
              property.value.type === 'ArrayExpression',
          );

          // Proceed if there's an imports array
          if (importsProperty) {
            importsProperty.value.elements.forEach((element) => {
              // Look for CallExpression, which indicates a method call like HttpModule.register()
              if (
                element.type === 'CallExpression' &&
                element.callee.type === 'MemberExpression' &&
                element.callee.object.name === 'HttpModule' &&
                element.callee.property.name === 'register'
              ) {
                // Now, ensure that the register call includes a timeout property
                const hasTimeout =
                  element.arguments[0] &&
                  element.arguments[0].type === 'ObjectExpression' &&
                  element.arguments[0].properties.some(
                    (property) => property.key.name === 'timeout',
                  );

                if (!hasTimeout) {
                  context.report({
                    node: element,
                    message:
                      'HttpModule.register method call should have a timeout argument',
                  });
                }
              } else if (element.name === 'HttpModule') {
                // Direct usage without register
                context.report({
                  node: element,
                  message:
                    "HttpModule must be used with a '.register()' method call that includes a 'timeout' property in @Module imports.",
                });
              }
            });
          }
        },
      };
    },
  },
};
