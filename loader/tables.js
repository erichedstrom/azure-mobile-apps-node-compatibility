var fs = require('fs'),
    path = require('path')

module.exports = function(mobileApp, path) {
    var tables = {}

    Object.keys(tables).forEach(function (tableName) {
        mobileApp.tables.add(tableName, convertTableDataToTable(tableName))
    })

    function obtainFiles() {
        fs.readdirSync(path).forEach(function (filename) {
            if(fs.statSync(filename).isFile())
                addContentToTables(filename, fs.readFileSync(filename, 'utf8'))
        })
    }

    function addContentToTables(filename, content) {
        var parsed = path.parse(filename),
            tableName = tableName()

        if(parsed.ext === '.json') {
            tables[tableName].definition = JSON.parse(content)
        } else {
            tables[tableName][operationName()] = content
        }

        function tableName() {
            var index = parsed.name.indexOf('.')
            return index === -1 ? parsed.name : parsed.name.substring(0, index)
        }

        function operationName() {
            var index = parsed.name.indexOf('.')
            return parsed.name.indexOf('.') > -1 && parsed.name.substring(index + 1)
        }
    }

    function convertTableDataToTable(tableName) {
        return tables[tableName];
    }
}
