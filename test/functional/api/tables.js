var wrap = require('../../..').wrap;

module.exports = wrap.api(function (exports, statusCodes) {
    exports.post = function(request, response) {
        request.service.tables.getTable('api').insert({ id: request.query.id }, {
            success: function (results) {
                response.send(201, "Created")
            }
        })
    }

    exports.get = function(request, response) {
        request.service.tables.getTable('api').where({ id: request.query.id }).read({
            success: function (results) {
                response.send(results)
            }
        })
    }
})
