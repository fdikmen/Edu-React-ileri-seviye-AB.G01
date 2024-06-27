/*
module.exports = {
    entry: {
        home:'./src/home.js',
        about:'./src/about.js'
    }
}
*/


const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry:"./src/home.js",
    mode:"development", // development, production, none
    output:{
        filename:"customResult.js",
        path:path.resolve(__dirname,"dist") // username/01.JS-Boundlers/bound-sample/dist
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins:[new BundleAnalyzerPlugin()],
    // devServer: {
    //     compress: true,
    //     port: 8080,
    // }
}