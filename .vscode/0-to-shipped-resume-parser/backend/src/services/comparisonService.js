const ResumeMatch = require('../models/ResumeMatch');
const parsePdf = require('../utils/parsePdf');

const compareResumes = async (resumePdf, jobDescription) => {
    try {
        const resumeData = await parsePdf(resumePdf);
        const skillsPresent = extractSkills(resumeData);
        const skillsMissing = compareSkills(skillsPresent, jobDescription.skills);

        const score = calculateScore(skillsPresent, jobDescription.skills);

        return {
            score,
            skillsPresent,
            skillsMissing
        };
    } catch (error) {
        throw new Error('Error comparing resumes: ' + error.message);
    }
};

const extractSkills = (resumeData) => {
    // Logic to extract skills from resumeData
    return resumeData.skills || [];
};

const compareSkills = (skillsPresent, jobDescriptionSkills) => {
    return jobDescriptionSkills.filter(skill => !skillsPresent.includes(skill));
};

const calculateScore = (skillsPresent, jobDescriptionSkills) => {
    const totalSkills = jobDescriptionSkills.length;
    const matchedSkills = skillsPresent.filter(skill => jobDescriptionSkills.includes(skill)).length;
    return (matchedSkills / totalSkills) * 100;
};

module.exports = {
    compareResumes
};