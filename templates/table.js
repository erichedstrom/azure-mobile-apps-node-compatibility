var wrap = require('azure-mobile-apps.compatibility').wrap,
    table = require('azure-mobile-apps').table();

<% Object.keys(operations).forEach(function (operationName) { %>
table.<%= operationName %>(wrap.<%= operationName %>(function (tables, push, request, response, user, statusCodes) {
    return
<%= operations[operationName] %>
}));
<% }) %>

module.exports = table;
