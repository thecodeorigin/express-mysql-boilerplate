require('dotenv').config({ path: '../../.env' });
module.exports = {
  development: {
    client: process.env.DB_TYPE,
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      database : process.env.DB_NAME,
      port: process.env.DB_PORT,
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/../database/migrations',
    },
    seeds: {
      directory: __dirname + '/../database/seeds'
    }
  }
};