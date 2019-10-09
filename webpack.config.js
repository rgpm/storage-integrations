var nodeExternals = require('webpack-node-externals');

module.exports = {
        entry: {
            'app': ['./src/storageFactory.js']
        },
        output: {
            filename: 'bundle.min.js',
            library: 'app'
        },
        mode: 'production',
        externals: [nodeExternals()]
    }
    