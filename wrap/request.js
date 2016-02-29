module.exports = function (context) {
    var request = context.req,
        response = context.res

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
        if(arguments.length === 0)
            response.status(200).end()

        if(arguments.length === 1)
            response.status(500).json({ error: arguments[0].message })

        response.status(arguments[0]).send(arguments[1])
    }

    request.parameters = request.query

    return request
}
