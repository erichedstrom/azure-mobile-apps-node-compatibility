var express = require('express'),
    mobileApps = require('azure-mobile-apps'),
    supertest = require('supertest-as-promised'),
    expect = require('chai').use(require('chai-subset')).expect,
    uuid = require('node-uuid').v4

describe('azure-mobile-apps-compatibility.functional.tables (requires configured database connection)', function () {
    //var app, mobileApp

    // before(function () {
    //     app = express()
    //     mobileApp = mobileApps({ skipVersionCheck: true, debug: true, configFile: __dirname + '/azureMobile.js' })
    //     mobileApp.tables.import(__dirname + '/tables')
    //     mobileApp.api.import(__dirname + '/api')
    //     app.use(mobileApp)
    // })

    // it("can be accessed from a custom API", function () {
    //     var id = uuid()
    //
    //     return supertest(app)
    //         .post('/api/tables?id=' + id)
    //         .expect(201)
    //         .then(function () {
    //             return supertest(app)
    //                 .post('/api/tables?id=' + uuid())
    //                 .expect(201)
    //         })
    //         .then(function () {
    //             return supertest(app)
    //                 .get('/api/tables?id=' + id)
    //                 .expect(200)
    //         })
    //         .then(function (results) {
    //             expect(results.body.length).to.equal(1)
    //             expect(results.body).to.containSubset([{ id: id }])
    //         })
    // })

    it("returns inserted object", function () {
        // var app = express()
        // var mobileApp = mobileApps({ skipVersionCheck: true, debug: true, configFile: __dirname + '/azureMobile.js' })
        // mobileApp.tables.import(__dirname + '/tables')
        // mobileApp.api.import(__dirname + '/api')
        // app.use(mobileApp)

        var app2 = express()
        var mobileApp2 = mobileApps({ skipVersionCheck: true, debug: true, configFile: __dirname + '/azureMobile.js' })
        mobileApp2.tables.import(__dirname + '/tables')
        mobileApp2.api.import(__dirname + '/api')
        app2.use(mobileApp2)

        var id = uuid()

        return supertest(app2)
            .post('/tables/execute')
            .send({ id: id })
            .expect(201)
            .then(function (results) {
                expect(results.body).to.containSubset({ id: id })
            })
    })
})
