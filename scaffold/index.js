var generateFiles = require('./generateFiles'),
    writer = require('./writer'),
    templates = require('../templates'),
    path = require('path')

module.exports = function (inputPath, outputPath) {
    var tables = generateFiles('table', path.join(inputPath, 'table')),
        apis = generateFiles('api', path.join(inputPath, 'api'), '*'),
        root = {
            'app.js': templates('app')
        }

    writer(outputPath, root)
    writer(outputPath + '/tables', tables)
    writer(outputPath + '/api', apis)
}
