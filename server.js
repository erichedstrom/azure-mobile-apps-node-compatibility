var app = require('express')(),
    mobileApp = require('azure-mobile-apps')({ skipVersionCheck: true }),
    loader = require('./loader')

loader.addMobileServiceTo(mobileApp)

app.use(mobileApp)
app.listen(process.env.PORT || 3000)
