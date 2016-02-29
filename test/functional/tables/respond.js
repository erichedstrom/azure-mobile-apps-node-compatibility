var wrap = require('../../..').wrap,
    table = require('azure-mobile-apps').table();

table.read(wrap.read(function (tables, push, request, response, user, statusCodes) {
    return function read(query, user, request) {
        request.respond()
    }
}));

table.insert(wrap.read(function (tables, push, request, response, user, statusCodes) {
    return function read(item, user, request) {
        request.respond(new Error("test"))
    }
}));

table.update(wrap.read(function (tables, push, request, response, user, statusCodes) {
    return function read(item, user, request) {
        request.respond(statusCodes.SERVICE_UNAVAILABLE, "unavailable")
    }
}));

module.exports = table;
