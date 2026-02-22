const config = {
    server: 'sample1dbserver.database.windows.net',
    database: 'sample1db',
    authentication: {
        options: {
            userName: 'cinjodbadmin',
            password: 'Cinjo@12345'
        }
    },
    options: {
        trustServerCertificate: true
    }

};
module.exports = config