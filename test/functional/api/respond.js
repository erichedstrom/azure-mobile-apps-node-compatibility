var wrap = require('../../..').wrap;

module.exports = wrap.api(function (exports, statusCodes) {
    exports.post = function(request, response) {
        response.send(statusCodes.ACCEPTED, { message : 'post' })
    }
})
