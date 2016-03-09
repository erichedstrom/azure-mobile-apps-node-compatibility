var generateFiles = require('./generateFiles'),
    writer = require('./writer'),
    templates = require('../templates'),
    static = require('../static'),
    path = require('path')

module.exports = function (inputPath, outputPath) {
    var tables = generateFiles('table', path.join(inputPath, 'table')),
        apis = generateFiles('api', path.join(inputPath, 'api'), '*'),
        count = Object.keys(tables).length + Object.keys(apis).length + Object.keys(static).length

    writer(outputPath, static)
    writer(outputPath + '/tables', tables)
    writer(outputPath + '/api', apis)

    console.log("Wrote " + count + " files")
}
