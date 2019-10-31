const axios = require('axios')

module.exports = {
	uploadFile: (data, config) => {
		return axios.post('http://localhost:3001/upload', data, config)
						.then(response => response)
						.catch(err => err)
	}
}