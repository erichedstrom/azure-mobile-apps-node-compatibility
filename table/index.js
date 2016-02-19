var load = require('../load'),
    mapPermissions = require('../mapPermissions'),
    templates = require('../templates')

module.exports = function (path) {
    var tables = load(path)

    return Object.keys(tables).reduce(function (files, tableName) {
        var table = tables[tableName]

        files[tableName + '.json'] = JSON.stringify(mapPermissions(table.permissions))
        files[tableName + '.js'] = templates('table', table)

        return files;
    }, {})
}
