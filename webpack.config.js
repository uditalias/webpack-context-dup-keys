const path = require("path");
const context = path.resolve(__dirname, "./src/");
module.exports = {
    mode: "development",
    context,
    resolve: {
        extensions: [".js"],
        modules: [context, "node_modules"]
    },
    entry: {
        app: "index.js"
    }
}