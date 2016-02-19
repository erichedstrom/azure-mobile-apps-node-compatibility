module.exports = function (context) {
    var request = context.req

    request.execute = function(options) {
        context.executePromise = context.execute()
            .then(function (results) {
                if(options.success)
                    options.success(results)
            })
            .catch(function (error) {
                if(options.error)
                    options.error(error)
            })
    }

    request.respond = function() {

    }

    return request
}
