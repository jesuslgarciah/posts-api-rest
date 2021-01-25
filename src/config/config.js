require('dotenv').config();

module.exports = {
  api: {
    PORT: process.env.PORT || 3000
  },
  db: {
    DB_URL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
  }
}