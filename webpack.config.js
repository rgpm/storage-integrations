module.exports = {
        entry: {
            'app': ['./src/storageFactory.js']
        },
        output: {
            filename: 'bundle.min.js',
            library: 'app'
        },
        mode: 'production'
    }
    