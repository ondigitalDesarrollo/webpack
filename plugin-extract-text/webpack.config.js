const path = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    // entry: {
    //     home: path.resolve(__dirname, 'index.js'),
    //     precios: path.resolve(__dirname, 'precios.js'),
    //     contacto: path.resolve(__dirname, 'contacto.js')
    // },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                // test: 'que tipo de archivo quiero reconocer',
                // use: 'que loader se va a encargar del archivo'
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                   fallback: 'style-loader',
                   use: 'css-loader'
                }),

            }
        ]
    },
    plugins:[
        // aqui van los plugins
        new ExtractTextPlugin('css/[name].css')
    ]
}