const clarifai = require('clarifai');
// const googleTranslate = require('google-translate')("AIzaSyDQZ7YH4cMlmzucOIASfsbqL-Rjw4lQvLA");
const translateService = require('./translateService')
const app = new clarifai.App({
	apiKey: "356f20daf55c4c3db4772c5599c35d46"
})

module.exports = {
	
	imageUpload: (base64) => new Promise((resolve, reject) => {
			app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
		    	.then(generalModel => {
		     		return generalModel.predict(base64)
		    	})
		    	.then(response => {
					let concepts = response['outputs'][0]['data']['concepts'][0]['name']
					return Promise.all([concepts])
					.then(concepts =>{
						let word = translateService.translate(concepts);
						return resolve(word);
					})
					
				})	
		      	.catch(err => {
		      		console.log(err)
		      		return reject(err)
		      	})
		})
}