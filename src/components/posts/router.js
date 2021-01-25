const express = require('express');
const router = express.Router();

const response = require('../../responses/response');

router.get('/', async function(req, res, next) {
  try {
    response.success(req, res, "Route Posts OK", 200);
  } catch (error) {
    response.error(req, res, error.message, res.status);
  }
})

module.exports = router;