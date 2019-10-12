module.exports = (router) => {
	router.get('/', (req, res) => {
		res.status(200).send({
			"yes": "bitch"
		})
	})
}