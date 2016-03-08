var query = require('./query'),
    service = require('./service'),
    user = require('./user')

module.exports = function (context) {
    var request = context.req;
    request.query = query(context)
    request.service = service(context)
    request.user = user(context)
    request.respond = function (statusCode, body) {
        context.res.status(statusCode).send(body);
    };

    return request;
}
