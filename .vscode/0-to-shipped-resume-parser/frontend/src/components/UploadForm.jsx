import React, { useState } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [score, setScore] = useState(null);
    const [presentSkills, setPresentSkills] = useState([]);
    const [missingSkills, setMissingSkills] = useState([]);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('resume', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setScore(data.score);
            setPresentSkills(data.presentSkills);
            setMissingSkills(data.missingSkills);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className="upload-form">
            <h2>Upload Your Resume</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" accept=".pdf" onChange={handleFileChange} />
                <button type="submit">Submit</button>
            </form>
            {score !== null && (
                <div className="results">
                    <h3>Results</h3>
                    <p>Score: {score}</p>
                    <h4>Present Skills:</h4>
                    <ul>
                        {presentSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    <h4>Missing Skills:</h4>
                    <ul>
                        {missingSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UploadForm;