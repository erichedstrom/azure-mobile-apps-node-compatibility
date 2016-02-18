var request = require('./request'),
    user = require('./user')

module.exports = {
    read: function (handler) {
        return function (context) {
            handler(context.query, user(context.user), request(context.request))
        }
    },
    insert: function (handler) {

    },
    update: function (handler) {

    },
    delete: function (handler) {

    }
}

function createRequestWrapper(context, handler) {
    
}

/*
function insert(item, user, request) {
function update(item, user, request) {
function del(id, user, request) {
function read(query, user, request) {

*/
