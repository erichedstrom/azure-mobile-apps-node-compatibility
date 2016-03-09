var queries = require('azure-mobile-apps/src/query')
    _ = require('underscore')

module.exports = function (context, table) {
    var data = context.data(table)

    return _.extend({
        read: function (options) {
            depromisify(data.read(queries.create(table.name)), options)
        },
        del: function (itemOrId, options) {
            var query = queries.create(table.name).where({ id: typeof itemOrId === 'object' ? itemOrId.id : itemOrId })
            depromisify(data.delete(query), options)
        },
        insert: function (item, options) {
            depromisify(data.insert(item), options)
        },
        update: function (item, options) {
            depromisify(data.update(item), options)
        }
    }, queries.create(table.name))

    function depromisify(promise, callbacks) {
        promise
            .then(function (results) {
                callbacks && callbacks.success && callbacks.success(results)
            })
            .catch(function (error) {
                if(callbacks && callbacks.error)
                    callbacks.error(error)
                else
                    context.logger.error(error)
            })
    }
}
