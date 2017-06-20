require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/chapmanLab',
        seeds: {
          directory: './seeds/dev'
        }
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL + '?ssl=true'
    }
};
