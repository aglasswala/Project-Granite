const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes');
require("dotenv").config();
function startServer(server) {
	const { PORT } = process.env
	console.log(PORT);

	server.listen(PORT || 3001, () => {
		console.log(`let's get it motherfucker, we live on ${PORT || 3001}`)
	})
}

async function init() {
	const app = express()

	app.use(bodyParser.json())
	app.use(cors())
	router(app)
	startServer(app)
}

init()
