const path = require("path");
const fs = require('fs-extra');

class CopyToDemoPlugin {
    apply(compiler) {
        compiler.hooks.afterEmit.tap('CopyToDemoPlugin', function (compilation) {
            const source = './dist/round-half-even.min.js';
            const dest = './docs/round-half-even.min.js';
            fs.copy(source, dest, function (err) {
                if (err) {
                    return console.error(err);
                }
                console.log('Copied to ' + dest);
            });
        });
    }
}

module.exports = {
    entry: "./src/index.ts",
    mode: "production",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        filename: "round-half-even.min.js",
        path: path.resolve(__dirname, "dist"),
        library: "roundHalfEven",
        libraryTarget: "umd"
    },
    plugins: [new CopyToDemoPlugin()],
};