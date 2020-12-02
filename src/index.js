const context = require.context(__dirname, true, /\.mdl\.js$/);

console.log(context.keys());