var apis = require('./apis'),
    tables = require('./tables')

module.exports = {
    addMobileServiceTo: function (mobileApp) {
        return {
            from: function (path) {
                tables(mobileApp, path)
                apis(mobileApp, path)
            }
        }
    }
}
