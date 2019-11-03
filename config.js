const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: () =>{
        return process.env['PORT']
    },
    REGION: process.env.REGION,
    ACCESSKEYID: process.env.AWSACCESSKEYID,
    SECRETACCESSKEY: process.env.AWSSECRETACCESSKEY
};
