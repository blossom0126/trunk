var path = require('path');

module.exports = {
    entry: './app.js', //entry为入口文件，即webpack以这个文件为基础打包成另一个文件，所以entry文件包括了要导入的文件
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: { //打包输出出bundle.js文件，这个文件就可以导入HTML中了
        path: __dirname,
        filename: '../static/bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                include: [/src/,path.join(__dirname, '/node_modules/antd')],
            /*include: [
                /src/,
                '/node_modules/antd/dist/'   //增加此项
                ,path.join(__dirname, '/node_modules/antd'),
            ],*/
                loader: 'babel', //用babel转换JSX

                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    }
};