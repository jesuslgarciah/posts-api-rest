require('dotenv').config();

module.exports = {
  api: {
    PORT: process.env.PORT || 3000
  },
  db: {
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    NAME: process.env.DB_NAME
  }
}