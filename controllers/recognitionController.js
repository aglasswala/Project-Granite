const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const rekognitionService = require('../services/rekognitionService');
const translateService = require('../services/translateService');

AWS.config.update({
  region: process.env.REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

module.exports = {
  uploadImageS3: async (req, res) => {
    const params = {
      Bucket: 'granite.project',
      Key: '',
      Body: '',
    };
    const fileStream = fs.createReadStream(req.file.path);
    fileStream.on('error', (err) => res.status(404).send({ err }));

    params.Body = fileStream;
    params.Key = path.basename(req.file.originalname);

    await new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if (err) {
          reject(err);
        }
        if (data) {
          resolve(data);
        }
      });
    })
      .catch((err) => res.status(400).send({ err }));

    const stuff = await rekognitionService.getLabels(params)
      .catch((err) => res.status(400).send({ err }));
    const stuff2 = await translateService.translate(stuff, req.body.lang)
      .catch((err) => res.status(400).send({ err }));

    return res.status(200).send(stuff2);
  },
};
