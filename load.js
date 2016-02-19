var fs = require('fs'),
    path = require('path')

module.exports = function(sourcePath) {
    return fs.readdirSync(sourcePath).reduce(function (target, filename) {
        if(fs.statSync(path.join(sourcePath, filename)).isFile())
            addContentToTarget(target, filename, fs.readFileSync(path.join(sourcePath, filename), 'utf8'))
        return target;
    }, {})
}

function addContentToTarget(target, filename, content) {
    var parsed = path.parse(filename),
        itemName = itemName()

    if(!target[itemName])
        target[itemName] = { operations: {} }

    if(parsed.ext === '.json')
        target[itemName].permissions = JSON.parse(content)
    else
        target[itemName].operations[operationName()] = content

    function itemName() {
        var index = parsed.name.indexOf('.')
        return (index === -1 ? parsed.name : parsed.name.substring(0, index)).toLowerCase()
    }

    function operationName() {
        var index = parsed.name.indexOf('.')
        return parsed.name.indexOf('.') > -1 ? parsed.name.substring(index + 1) : 'api'
    }
}
