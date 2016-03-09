var wrap = require('../../wrap'),
    expect = require('chai').use(require('chai-subset')).expect

describe('azure-mobile-apps.compatibility.wrap.table', function () {
    it("read returns mobile app compatible function", function () {
        var innerExecuted = false,
            context = {
                tables: {},
                push: {},
                req: {},
                res: {},
                query: {}
            },
            wrapped = wrap.read(function (tables, push, request, user) {
                return function read(query, user, request) {
                    innerExecuted = true;
                    expect(tables).to.equal(context.tables)
                    expect(push).to.equal(context.push)
                    expect(request).to.equal(context.req)
                    expect(query).to.equal(context.query)
                    expect(user.level).to.equal('anonymous')
                }
            })
        wrapped(context)
        expect(innerExecuted).to.be.true;
    })

    it("wrapped function returns undefined if request.execute is not executed", function () {
        var wrapped = wrap.read(function (tables, push, request, user) {
            return function read(query, user, request) { }
        })
        expect(wrapped({ req: {} })).to.be.undefined
    })

    it("wrapped function returns promise if request.execute is executed", function () {
        var wrapped = wrap.read(function (tables, push, request, user) {
            return function read(query, user, request) {
                request.execute()
            }
        })
        expect(wrapped({ req: {}, execute: execute })).to.be.a('Promise')

        function execute() {
            return new Promise(function () {})
        }
    })
})
