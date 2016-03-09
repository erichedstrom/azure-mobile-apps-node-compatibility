var fs = require('fs'),
    path = require('path')

module.exports = fs.readdirSync(__dirname).reduce(function (files, filename) {
    if(filename !== 'index.js')
        files[filename] = fs.readFileSync(path.join(__dirname, filename))
    return files
}, { })
