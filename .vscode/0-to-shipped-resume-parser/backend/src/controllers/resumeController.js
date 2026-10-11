const ResumeMatch = require('../models/ResumeMatch');
const comparisonService = require('../services/comparisonService');

// Controller to handle resume upload and comparison
exports.uploadResume = async (req, res) => {
    try {
        const { resumePdf, jobDescription } = req.body;

        // Call the comparison service to process the resume and job description
        const result = await comparisonService.compareResume(resumePdf, jobDescription);

        // Save the result to the database
        const resumeMatch = new ResumeMatch(result);
        await resumeMatch.save();

        // Send the result back to the client
        res.status(200).json({
            score: result.score,
            presentSkills: result.presentSkills,
            missingSkills: result.missingSkills,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error processing the resume', error: error.message });
    }
};