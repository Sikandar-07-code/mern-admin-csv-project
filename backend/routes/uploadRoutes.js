const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadCSVAndDistribute } = require('../controllers/uploadController');

// Multer config for CSV upload
const storage = multer.memoryStorage();
const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'text/csv' || 
            file.mimetype === 'application/vnd.ms-excel' || 
            file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            cb(null, true);
        } else {
            cb(new Error('Only CSV and Excel files are allowed'));
        }
    }
});

// Route to handle upload
router.post('/upload', upload.single('file'), uploadCSVAndDistribute);

module.exports = router;
