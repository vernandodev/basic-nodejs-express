const multer = require('multer');
const util = require('util');
const DIR = '../resources/uploads';

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let upload = multer({ storage: storage }).single('fupload');
util.promisify(upload);

let fileupload = util.promisify(upload);

module.exports = { fileupload };
