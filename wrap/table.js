var promise = require('./promise'),
    queries = require('azure-mobile-apps/src/query'),
    _ = require('underscore')

module.exports = function (context, table) {
    var data = context.data(table),
        query = queries.create(table.name)

    return _.extend({
        read: function (options) {
            promise(data.read(query), options, context.logger)
        },
        del: function (itemOrId, options) {
            var query = queries.create(table.name).where({ id: typeof itemOrId === 'object' ? itemOrId.id : itemOrId })
            promise(data.delete(query), options, context.logger)
        },
        insert: function (item, options) {
            promise(data.insert(item), options, context.logger)
        },
        update: function (item, options) {
            promise(data.update(item), options, context.logger)
        }
    }, query)
}
