var query = require('./query'),
    request = require('./request'),
    response = require('./response'),
    user = require('./user'),
    statusCodes = require('./statusCodes')

module.exports = {
    read: tableWrapper(function (context) {
        return [query(context), user(context), request(context)]
    }),
    insert: tableWrapper(function (context) {
        return [context.item, user(context), request(context)]
    }),
    update: tableWrapper(function (context) {
        return [context.item, user(context), request(context)]
    }),
    delete: tableWrapper(function (context) {
        return [context.id, user(context), request(context)]
    }),
    api: apiWrapper
}

function tableWrapper(argumentFactory) {
    return function (generatedHandler) {
        return function (context) {
            var userHandler = generatedHandler(context.tables, context.push, request(context), response(context), user(context), statusCodes)
            userHandler.apply(null, argumentFactory(context))
            return context.executePromise
        }
    }
}

function apiWrapper(generatedHandler) {
    var methods = {}
    generatedHandler(methods, statusCodes)

    return Object.keys(methods).reduce(function (definition, method) {
        definition[method] = function (req, res, next) {
            methods[method](request(req.azureMobile), response(req.azureMobile))
        }
        return definition
    }, {})
}
