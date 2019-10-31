const imageService = require('../services/imageService')
const rekognitionService = require('../services/rekognitionService')
const AWS = require('aws-sdk')
AWS.config.update({region: 'us-east-2', accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY})
var fs = require('fs');
const path = require('path')
const s3 = new AWS.S3();

const base64_encode = (file) => {
    const bitmap = fs.readFileSync(file);
	return new Buffer(bitmap).toString('base64');
}

module.exports = {
    uploadImage: (req, res) => {
    	const str = base64_encode(req.file.path)
    	return imageService.imageUpload(str)
    		.then(result => {
    			return res.status(200).send(result)
    		})
    		.catch(err => {
    			return res.status(400).send(err)
    		})
	},
	uploadImageS3: async (req,res) =>{
		let params = {
			Bucket: 'granite.project',
			Key: '',
			Body:''
		}
		let fileStream = fs.createReadStream(req.file.path)
		fileStream.on('error', function(err){
			console.log('File Error', err);
		});
		params.Body = fileStream;
		params.Key = path.basename(req.file.originalname);
		await new Promise((resolve,reject) => {
			s3.upload(params, (err, data) => {
				if (err) { 
					reject(err);
				}
				if (data) {
					console.log(data);
					resolve(data);
				}
			})
		})
			.catch(err => console.log(err))
		
		return rekognitionService.getLabels(params)
			.then(result => {
				return res.status(200).send(result)
			})
			.catch(err => {
				return res.status(400).send(err)
			})
	}
}