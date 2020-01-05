module.exports = {
	detectObj: async (event, context, callback) => {
		console.log(name, email)
		return {
			statusCode: 200,
			body: JSON.stringify({
				message: "yes"
			})
		}
	}
}