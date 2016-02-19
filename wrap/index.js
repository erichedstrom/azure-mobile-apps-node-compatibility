var query = require('./query'),
    request = require('./request'),
    response = require('./response'),
    user = require('./user')

module.exports = {
    read: function (generatedHandler) {
        return function (context) {
            return basicWrapper(context, generatedHandler, function (userHandler) {
                return userHandler(query(context), user(context), request(context))
            })
        }
    },
    insert: function (handler) {

    },
    update: function (handler) {

    },
    delete: function (handler) {

    }
}

function basicWrapper(context, generatedHandler, innerHandler) {
    // generated handlers all have the signature (tables, push, request, response, user) and will return an instance of the user defined handler
    var userHandler = generatedHandler(context.tables, context.push, context.req, context.res, context.user)
    return innerHandler(userHandler)
}

/*
function insert(item, user, request) {
function update(item, user, request) {
function del(id, user, request) {
function read(query, user, request) {

*/
