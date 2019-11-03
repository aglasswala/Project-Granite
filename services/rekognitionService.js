const AWS = require('aws-sdk');
const dotenv = require('dotenv')

module.exports = {
  getLabels: async (image) =>{
    let list = [];
    AWS.config.update({region: process.env.REGION, accessKeyId: process.env.AWSACCESSKEYID, secretAccessKey: process.env.AWSSECRETACCESSKEY});

    const client = new AWS.Rekognition();
    const params = {
      Image: {
        S3Object: {
          Bucket: image.Bucket,
          Name: image.Key
        },
      },
      MaxLabels: 10
    }

    await new Promise((resolve,reject) =>{
      client.detectLabels(params, function(err, response) {
        if (err) {
          reject(err)
        } else {
          response.Labels.forEach(async label => {
                list.push(label.Name);     
          },
          resolve(list)
        )} 
      });
    })

    return list;
  }
}