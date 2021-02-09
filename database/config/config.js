const config = require('../../config/config');

module.exports = {
  'development': {
    'url': config.db.DB_URL_DEV,
    'dialect': 'postgres'
  },
  'production': {
    'url': config.db.DB_URL_PROD,
    'dialect': 'postgres'
  }
}
