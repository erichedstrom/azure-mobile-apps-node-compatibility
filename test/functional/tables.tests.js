var express = require('express'),
    mobileApps = require('azure-mobile-apps'),
    supertest = require('supertest-as-promised'),
    expect = require('chai').use(require('chai-subset')).expect

describe('azure-mobile-apps-compatibility.functional.tables', function () {
    var app, mobileApp

    beforeEach(function () {
        app = express()
        mobileApp = mobileApps({ skipVersionCheck: true, debug: true })
        mobileApp.tables.import(__dirname + '/tables')
        mobileApp.api.import(__dirname + '/api')
        app.use(mobileApp)
    })

    it("can be accessed from a custom API", function () {
        return supertest(app)
            .post('/api/tables')
            .expect(201)
            .then(function () {
                return supertest(app)
                    .get('/api/tables')
                    .expect(200)
            })
            .then(function (results) {
                expect(results.body).to.containSubset([{ id: '1' }])
            })
    })

    it("exposes callback style read from queries", function () {
        return supertest(app)
            .post('/api/tables')
            .expect(201)
            .then(function () {
                return supertest(app)
                    .patch('/api/tables')
                    .expect(200)
            })
            .then(function (results) {
                expect(results.body).to.containSubset([{ id: '1' }])
            })
    })
})
