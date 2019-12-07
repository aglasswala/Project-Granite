const fs = require('fs');
const AWS = require('aws-sdk');
const rekognitionService = require('../services/rekognitionService');
const translateService = require('../services/translateService');

AWS.config.update({
  region: process.env.REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});


module.exports = {
  uploadImageS3: async (req, res) => {
    const fileStream = fs.readFileSync(req.file.path)
    const stuff = await rekognitionService.getLabels(fileStream)
      .catch((err) => res.status(400).send({ err }));
    const stuff2 = await translateService.translate(stuff, req.body.lang)
      .catch((err) => res.status(400).send({ err }));
      
    return res.status(200).send(stuff2)
  },
};
