const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");


module.exports = {
    entry: './src/index.ts',
    devServer:{
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4040,
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                configFile: path.resolve('./tsconfig.json'),
            }
        },
        // {
        //     test: /\.(png|jpg|gif|env|glb|gltf|stl)$/i,
        //     use: [
        //         {
        //             loader: "url-loader",
        //             options: {
        //                 limit: 0,
        //             },
        //         },
        //     ],
        // }
    ]
    },
    devtool:'source-map',
    mode: "development",
    plugins: [
        new CopyPlugin({
          patterns: [
            { from: path.resolve(__dirname, "src/index.html"), to: path.resolve(__dirname, "dist/") },
            // { from: path.resolve(__dirname, "src/assets/"), to: path.resolve(__dirname, "game/assets/") }
          ],
        }),
      ]
};