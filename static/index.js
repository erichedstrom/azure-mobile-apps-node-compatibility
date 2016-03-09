var fs = require('fs'),
    path = require('path')

module.exports = function (targetPath) {
    targetPath = targetPath || __dirname
    return fs.readdirSync(targetPath).reduce(function (files, filename) {
        // npm renames .gitignore to .npmignore - safer to treat specially
        var targetFilename = filename === 'gitignore' ? '.gitignore' : filename;

        // ignore this file and cruft files in a default mobile service shared folder
        if(!(filename === 'index.js' && targetPath === __dirname)
            && ['__fxutil.js', 'placeholder', 'readme.md'].indexOf(filename.toLowerCase()) === -1)
            files[targetFilename] = fs.readFileSync(path.join(targetPath, filename))

        return files
    }, { })
}
