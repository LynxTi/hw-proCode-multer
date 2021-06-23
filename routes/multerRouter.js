const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const upload = multer({ dest: path.join(__dirname,'../public/uploads/') })

const router = express.Router();

router.post('/', upload.single('inputFile'), (req, res) => {
    const { inputName } = req.body;
    const { filename } = req.file;

    res.json({
        status: 'ok'
    });

    if (inputName != '') {
        renameFile(filename, inputName);
    }
});

module.exports = router;

const renameFile = (oldName, newName) => {
    oldName = path.join(__dirname,'../public/uploads/',oldName);
    newName =path.join(__dirname,'../public/uploads/',newName);

    fs.rename(oldName, newName, (err) => {

        if (err) {
            console.log(err);
            return
        }
    });
}