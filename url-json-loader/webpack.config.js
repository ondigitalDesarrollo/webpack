const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: './dist/'
    },
    devServer: {
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: [
                //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
                //   { loader: "css-loader" }, // interpreta los archivos css en js via import
                // ]
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                },
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            },
            {
                test: /\.(mp4)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,
                        name: 'video/[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.(webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,
                        name: 'video/[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.json$/,
                user: {
                    loader: 'json-loader'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/[name].css')
    ]
}