const clarifai = require('clarifai');
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
					let concepts = response['outputs'][0]['data']['concepts']
					let words = [];
					concepts.forEach( (item, index) =>{
						words.push(item.name);
					})
					return Promise.all(words)
					.then(async words =>{
						let list = [];
						let translatedWords =  await translateService.translate(words);
						for(let i = 0; i < words.length; i++){
							list.push(" " + words[i] + " " + translatedWords[i]);
						}
						return resolve(list);
					})
				})
		      	.catch(err => reject(err))
		})
}