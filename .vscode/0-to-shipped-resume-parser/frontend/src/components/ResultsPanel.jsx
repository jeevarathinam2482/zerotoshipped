import React from 'react';

const ResultsPanel = ({ score, presentSkills, missingSkills }) => {
    return (
        <div className="results-panel">
            <h2>Resume Analysis Results</h2>
            <div className="score">
                <h3>Score: {score}</h3>
            </div>
            <div className="skills">
                <h4>Present Skills:</h4>
                <ul>
                    {presentSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="missing-skills">
                <h4>Missing Skills:</h4>
                <ul>
                    {missingSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ResultsPanel;