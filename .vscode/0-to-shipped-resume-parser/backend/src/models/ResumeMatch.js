const mongoose = require('mongoose');

const resumeMatchSchema = new mongoose.Schema({
    resumeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Resume'
    },
    jobDescriptionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'JobDescription'
    },
    score: {
        type: Number,
        required: true
    },
    presentSkills: {
        type: [String],
        required: true
    },
    missingSkills: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ResumeMatch', resumeMatchSchema);