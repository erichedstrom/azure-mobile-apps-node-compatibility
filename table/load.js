var fs = require('fs'),
    path = require('path')

module.exports = function(sourcePath) {
    return fs.readdirSync(sourcePath).reduce(function (target, filename) {
        if(fs.statSync(path.join(sourcePath, filename)).isFile())
            addContentToTables(target, filename, fs.readFileSync(path.join(sourcePath, filename), 'utf8'))
        return target;
    }, {})
}

function addContentToTables(tables, filename, content) {
    var parsed = path.parse(filename),
        tableName = tableName()

    if(!tables[tableName])
        tables[tableName] = { operations: {} }

    if(parsed.ext === '.json')
        tables[tableName].permissions = JSON.parse(content)
    else
        tables[tableName].operations[operationName()] = content

    function tableName() {
        var index = parsed.name.indexOf('.')
        return (index === -1 ? parsed.name : parsed.name.substring(0, index)).toLowerCase()
    }

    function operationName() {
        var index = parsed.name.indexOf('.')
        return parsed.name.indexOf('.') > -1 && parsed.name.substring(index + 1)
    }
}
