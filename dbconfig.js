const config = {
    server: 'sample1dbserver.database.windows.net',
    database: 'sample1db',
    user: 'cinjodbadmin',
    password: 'Cinjo@12345',
    port: 1433,
    authentication: {
       type: 'default'
    },
    options: {
        trustedConnection: true,
        trustServerCertificate: true,
        enableArithPort: true,
        encrypt: true
    }

};
module.exports = config