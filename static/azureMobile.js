// This configuration file is used for local debugging and is not published to Azure
module.exports = {
    data: {
        provider: 'mssql',
        server: '<your_database_server>.database.windows.net',
        database: '<your_database_name>',
        user: '<username>',
        password: '<password>'
    }
}
