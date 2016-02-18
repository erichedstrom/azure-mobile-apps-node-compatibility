var files = require('../../table')(__dirname + '/files'),
    expect = require('chai').use(require('chai-subset')).expect

describe('azure-mobile-apps.compatibility.table', function () {
    it("creates appropriate files", function () {
        expect(Object.keys(files)).to.deep.equal([
            'friends.json',
            'friends.js',
            'messages.json',
            'messages.js'
        ])
    })

    it("applies template to each table", function () {
        expect(files['friends.js'].indexOf("('azure-mobile-apps').table()")).to.not.equal(-1);
        expect(files['messages.js'].indexOf('wrap.read(function read')).to.not.equal(-1);
        expect(files['messages.js'].indexOf('wrap.insert(function insert')).to.not.equal(-1);
    })
})
