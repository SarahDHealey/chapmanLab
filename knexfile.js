require('dotenv').config();

module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://localhost/chapmanLab_test',
    seeds: {
      directory: './seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: 'postgres://localhost/chapmanLab',
    seeds: {
      directory: './seeds/dev'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
    seeds: {
      directory: './seeds/production'
    }
  }
};
