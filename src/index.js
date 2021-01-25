const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config/config');
const response = require('./responses/response');
const routes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async function(req, res, next){
  try {
    response.success(req, res, "Server is running 🟢", 200);
  } catch (error) {
    response.error(res, res, error.message, res.status);
  }
})

routes(app);

mongoose.connect(config.db.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true  }, () => {
  console.log("Connected to database");
})

const server = app.listen(config.api.PORT, () => {
  console.log(`Server running on http://localhost:${server.address().port}`)
})