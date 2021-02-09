require('dotenv').config();

module.exports = {
  api: {
    PORT: process.env.PORT || 3000
  },
  db: {
    DB_URL_DEV: `postgres://${process.env.DB_USER_DEV}:${process.env.DB_PWD_DEV}@db:${process.env.POSTGRES_PORT}/${process.env.DB_NAME_DEV}`,
    DB_URL_PROD: `postgres://${process.env.DB_USER_PROD}:${process.env.DB_PWD_PROD}@${process.env.POSTGRES_SERVER_PROD}:${process.env.POSTGRES_PORT}/${process.env.DB_NAME_PROD}`
  }
}