var mssql = require('./mssql'),
    push = require('./push'),
    tables = require('./tables')

module.exports = function (context) {
    return {
        mssql: mssql(context),
        push: push(context),
        tables: tables(context)
    }
}
