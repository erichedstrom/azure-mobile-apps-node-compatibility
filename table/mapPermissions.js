module.exports = function (source) {
    var permissions = source.routes['/'],
        mapping = {
            "public": "anonymous",
            "application": "anonymous",
            "user": "authenticated",
            "admin": "disabled"
        }

    return Object.keys(permissions).reduce(function (target, operationName) {
        target[operationName] = { access: mapping[permissions[operationName].permission] }
        if(operationName === 'insert')
            target.undelete = { access: mapping[permissions.insert.permission] }
        return target;
    }, { autoIncrement: false })
}
