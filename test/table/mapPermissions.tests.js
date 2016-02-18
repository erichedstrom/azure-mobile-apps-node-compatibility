var mapPermissions = require('../../table/mapPermissions'),
    expect = require('chai').expect

describe('azure-mobile-apps.compatibility.table.mapPermissions', function () {
    it("maps mobile services permissions to mobile apps", function () {
        var source = require('./files/friends.json')
        expect(mapPermissions(source)).to.deep.equal({
            "autoIncrement": false,
            "read": {
              "access": "disabled"
            },
            "insert": {
              "access": "anonymous"
            },
            "update": {
              "access": "anonymous"
            },
            "delete": {
              "access": "authenticated"
            },
            "undelete": {
              "access": "anonymous"
            }
        })
    })
})
