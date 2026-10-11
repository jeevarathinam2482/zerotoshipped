const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

// Route to upload a resume PDF and compare it with a job description
router.post('/upload', resumeController.uploadResume);

// Route to get the results of the resume comparison
router.get('/results/:id', resumeController.getResults);

module.exports = router;