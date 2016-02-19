var load = require('./load'),
    mapPermissions = require('./mapPermissions'),
    templates = require('./templates')

module.exports = function (template, path, route) {
    var items = load(path)

    return Object.keys(items).reduce(function (files, itemName) {
        var item = items[itemName]

        files[itemName + '.json'] = JSON.stringify(mapPermissions(item.permissions, route))
        files[itemName + '.js'] = templates(template, item)

        return files;
    }, {})
}
