const formatScore = (score) => {
    return score.toFixed(2); // Format score to two decimal places
};

const formatSkills = (skills) => {
    return skills.map(skill => skill.charAt(0).toUpperCase() + skill.slice(1)).join(', ');
};

const formatMissingSkills = (missingSkills) => {
    return missingSkills.length > 0 ? missingSkills.join(', ') : 'No missing skills';
};

export { formatScore, formatSkills, formatMissingSkills };