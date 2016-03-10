var files = require('../../scaffold/generateFiles')('table', __dirname + '/files/table'),
    expect = require('chai').use(require('chai-subset')).expect

describe('azure-mobile-apps-compatibility.scaffold.generateFiles', function () {
    it("creates appropriate files", function () {
        expect(Object.keys(files)).to.deep.equal([
            'friends.json',
            'friends.js',
            'Messages.json',
            'Messages.js'
        ])
    })

    it("applies template to each table", function () {
        expect(files['friends.js']).to.contain("('azure-mobile-apps').table()");
        expect(files['Messages.js']).to.contain('wrap.read(function ');
        expect(files['Messages.js']).to.contain('wrap.insert(function ');
        expect(files['Messages.js']).to.contain('/*insert*/');
        expect(files['Messages.js']).to.contain('/*read*/');
    })
})
