const express = require('express');
const multer = require('multer');
const path = require('path');

const upload = multer({ dest: path.join(__dirname,'../public/uploads/') })

const router = express.Router();


router.post('/', upload.single('inputFile'), (req, res) => {
    res.json({
        status: 'ok'
    });
});

module.exports = router;

