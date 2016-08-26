var fs = require('fs'),
    path = require('path')

module.exports = function (targetPath) {
    targetPath = targetPath || __dirname
    return obtainFiles(targetPath, {})
}

function obtainFiles(targetPath, target) {
    return fs.readdirSync(targetPath).reduce(function (files, filename) {
        // npm renames .gitignore to .npmignore - safer to treat specially
        var targetFilename = filename === 'gitignore' ? '.gitignore' : filename;

        // recurse through directories
        if(fs.statSync(path.join(targetPath, filename)).isDirectory())
            obtainFiles(path.join(targetPath, filename), target)

        // ignore this file and cruft files in a default mobile service shared folder
        else if(!(filename === 'index.js' && targetPath === __dirname)
            && ['__fxutil.js', 'placeholder', 'readme.md'].indexOf(filename.toLowerCase()) === -1)
            files[targetFilename] = fs.readFileSync(path.join(targetPath, filename))

        return files
    }, target)
}
