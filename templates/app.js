var app = require('express')(),
    mobileApp = require('azure-mobile-apps')()

mobileApp.tables.import('tables')
mobileApp.api.import('api')
app.use(mobileApp)
app.listen(process.env.PORT || 3000)
