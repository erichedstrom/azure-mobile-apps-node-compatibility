var compat = require('..'),
    expect = require('chai').use(require('chai-subset')).expect,
    rimraf = require('rimraf').sync,
    fs = require('fs'),

    inputPath = __dirname + '/files'
    outputPath = __dirname + '/output'

describe('azure-mobile-apps.compatibility.integration', function () {
    before(function () {
        compat.scaffold(inputPath, outputPath)
    })

    after(function () {
        rimraf(outputPath)
    })

    it("creates correct files", function () {
        expect(fs.readdirSync(outputPath)).to.deep.equal([
            'api',
            'app.js',
            'tables'
        ])

        expect(fs.readdirSync(outputPath + '/tables')).to.deep.equal([
            'friends.js',
            'friends.json',
            'messages.js',
            'messages.json'
        ])

        expect(fs.readdirSync(outputPath + '/api')).to.deep.equal([
            'custom.js',
            'custom.json'
        ])
    });
});
