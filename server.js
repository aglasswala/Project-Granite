const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const router = require('./routes');

function startServer(server) {
  const { PORT } = process.env;

  server.listen(PORT || 3001, () => {
    console.log(`let's get it motherfucker, we live on ${PORT || 3001}`); // eslint-disable-line
  });
}

async function init() {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());

  router(app);
  startServer(app);
}

init();
