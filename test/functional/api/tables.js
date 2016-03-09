var wrap = require('../../..').wrap;

module.exports = wrap.api(function (exports, statusCodes) {
    exports.get = function(request, response) {
        request.service.tables.getTable('api').read({
            success: function (results) {
                response.send(results)
            }
        })
    }

    exports.post = function(request, response) {
        request.service.tables.getTable('api').insert({ id: '1' }, {
            success: function (results) {
                response.send(201, "Created")
            }
        })
    }

    exports.patch = function(request, response) {
        request.service.tables.getTable('api').where({ id: '1' }).read({
            success: function (results) {
                response.send(results)
            }
        })
    }
})
