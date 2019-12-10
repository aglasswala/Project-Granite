const AWS = require('aws-sdk');

AWS.config.update({
  region: process.env.REGION,
  accessKeyId: process.env.AWSACCESSKEYID,
  secretAccessKey: process.env.AWSSECRETACCESSKEY,
});

module.exports = {
  getLabels: async (image) => {
    const labels = [];
    const client = new AWS.Rekognition();
    const params = {
      Image: {
        Bytes: image,
      },
      MaxLabels: 16,
    };
    await new Promise((resolve, reject) => {
      client.detectLabels(params, (err, response) => {
        if (err) {
          reject(err);
        } else {
          response.Labels.forEach(async (label) => {
            labels.push(label);
          },
          resolve(labels));
        }
      });
    });

    return labels;
  },
};
