const recognitionController = require('./controllers/recognitionController')

module.exports = (router) => {
	router.get('/', (req, res) => {
		res.status(200).send({
			"yes": "bitch"
		})
	})

	router.post('/upload', recognitionController.uploadImage)
}