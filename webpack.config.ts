import * as path from "path"

module.exports = {
    'entry': './index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    "target" : 'node'
};