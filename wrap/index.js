var query = require('./query'),
    request = require('./request'),
    response = require('./response'),
    user = require('./user')

// hmm... could be refactored to remove boilerplate
module.exports = {
    //function read(query, user, request)
    read: function (generatedHandler) {
        return function (context) {
            basicWrapper(context, generatedHandler, function (userHandler) {
                userHandler(query(context), user(context), request(context))
            })
            return context.executePromise
        }
    },
    //function insert(item, user, request)
    insert: function (generatedHandler) {
        return function (context) {
            basicWrapper(context, generatedHandler, function (userHandler) {
                userHandler(context.item, user(context), request(context))
            })
            return context.executePromise
        }
    },
    //function update(item, user, request)
    update: function (generatedHandler) {
        return function (context) {
            basicWrapper(context, generatedHandler, function (userHandler) {
                userHandler(context.item, user(context), request(context))
            })
            return context.executePromise
        }
    },
    //function del(id, user, request)
    delete: function (generatedHandler) {
        return function (context) {
            basicWrapper(context, generatedHandler, function (userHandler) {
                userHandler(context.id, user(context), request(context))
            })
            return context.executePromise
        }
    }
}

function basicWrapper(context, generatedHandler, innerHandler) {
    // generated handlers all have the signature (tables, push, request, response, user) and will return an instance of the user defined handler
    var userHandler = generatedHandler(context.tables, context.push, context.req, context.res, context.user)
    return innerHandler(userHandler)
}
