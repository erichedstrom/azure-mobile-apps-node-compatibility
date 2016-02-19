var load = require('./load'),
    mapPermissions = require('../mapPermissions'),
    fs = require('fs'),
    _ = require('underscore'),

    template = fs.readFileSync(__dirname + '/template.js', 'utf8')

module.exports = function (path) {
    var tables = load(path)

    return Object.keys(tables).reduce(function (files, tableName) {
        var table = tables[tableName]

        files[tableName + '.json'] = JSON.stringify(mapPermissions(table.permissions))
        files[tableName + '.js'] = _.template(template)(table)

        return files;
    }, {})
}
