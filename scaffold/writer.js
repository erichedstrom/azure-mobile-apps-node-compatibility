var mkdirp = require('mkdirp').sync,
    path = require('path'),
    fs = require('fs')

module.exports = function (outputPath, files) {
    mkdirp(outputPath)
    Object.keys(files).forEach(function (filename) {
        fs.writeFile(path.join(outputPath, filename), files[filename])
    })
}
