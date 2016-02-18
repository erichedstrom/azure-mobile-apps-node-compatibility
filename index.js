var api = require('./api'),
    table = require('./table'),
    wrap = require('./wrap')

module.exports = {
    wrap: wrap,
    addMobileServiceTo: function (mobileApp) {
        return {
            from: function (path) {
                table(mobileApp, path)
                api(mobileApp, path)
            }
        }
    }
}
