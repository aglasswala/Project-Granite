const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const recognitionController = require('./controllers/recognitionController');

module.exports = (router) => {
  router.post('/upload', upload.single('file'), recognitionController.uploadImageS3);
};
