var fs = require('fs'),
    path = require('path')

module.exports = fs.readdirSync(__dirname).reduce(function (files, filename) {
    // npm renames .gitignore to .npmignore - safer to treat specially
    var targetFilename = filename === 'gitignore' ? '.gitignore' : filename;

    if(filename !== 'index.js')
        files[targetFilename] = fs.readFileSync(path.join(__dirname, filename))

    return files
}, { })
