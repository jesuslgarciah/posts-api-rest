const express = require('express');
const cors = require('cors');

const config = require('../config/config');
const response = require('./responses/response');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async function(req, res, next){
  try {
    response.success(req, res, "Server is running 🟢", 200);
  } catch (error) {
    response.error(res, res, error.message, error.status);
  }
})

routes(app);

const server = app.listen(config.api.PORT, () => {
  console.log(`Server running on http://localhost:${server.address().port}`)
})