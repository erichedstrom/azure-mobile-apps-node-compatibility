var wrap = require('../../..').wrap,
    table = require('azure-mobile-apps').table();

table.read(wrap.read(function (tables, push, request, response, user, statusCodes) {
    return function read(query, user, request) {
        request.execute()
    }
}));

table.insert(wrap.read(function (tables, push, request, response, user, statusCodes) {
    return function read(item, user, request) {
        request.execute()
    }
}));

table.update(wrap.read(function (tables, push, request, response, user, statusCodes) {
    return function read(item, user, request) {
        request.execute()
    }
}));

table.delete(wrap.read(function (tables, push, request, response, user, statusCodes) {
    return function read(item, user, request) {
        request.execute()
    }
}));

table.undelete(wrap.read(function (tables, push, request, response, user, statusCodes) {
    return function read(item, user, request) {
        request.execute()
    }
}));


module.exports = table;
