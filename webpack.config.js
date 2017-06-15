'use strict';

const path = require('path');
const webpack = require('webpack');
const {optimize} = webpack;
const {UglifyJsPlugin} = optimize;

const dir = './lib';

const {env} = process;

const dist = path.resolve(__dirname, 'dist');
const devtool = 'source-map';

const plugins = [
    new UglifyJsPlugin({
        sourceMap: true,
        comments: false,
    })
];

const loaders = [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
}];

module.exports = {
    devtool,
    entry: {
        'show-invisibles': `${dir}/show-invisibles.js`,
    },
    output: {
        library: 'show-invisibles',
        filename: '[name].js',
        path: dist,
        pathinfo: false,
        libraryTarget: 'umd',
        devtoolModuleFilenameTemplate,
    },
    plugins,
    module: {
        loaders,
    },
    externals: {
        'codemirror/lib/codemirror': 'CodeMirror',
    },
};

function devtoolModuleFilenameTemplate(info) {
    const resource = info.absoluteResourcePath.replace(__dirname + path.sep, '');
    return `file://cm-show-invisibles/${resource}`;
}

