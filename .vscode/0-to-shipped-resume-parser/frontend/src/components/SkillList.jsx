import React from 'react';

const SkillList = ({ skills }) => {
    return (
        <div className="skill-list">
            <h3>Extracted Skills</h3>
            <ul>
                {skills.length > 0 ? (
                    skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))
                ) : (
                    <li>No skills found.</li>
                )}
            </ul>
        </div>
    );
};

export default SkillList;