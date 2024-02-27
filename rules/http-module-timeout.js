module.exports = {
  rules: {
    error: function (context) {
      return {
        "CallExpression[callee.object.name='HttpModule'][callee.property.name='register']":
          function (node) {
            var argument = node.arguments[0];
            if (
              argument.type !== 'ObjectExpression' ||
              !argument.properties.some(function (property) {
                return property.key.name === 'timeout';
              })
            ) {
              context.report({
                node: node,
                message: 'HttpModule.register method call should have a timeout argument',
              });
            }
          },
      };
    },
  },
};
