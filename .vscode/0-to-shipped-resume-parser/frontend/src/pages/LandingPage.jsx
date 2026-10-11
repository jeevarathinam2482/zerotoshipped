import React, { useState } from 'react';
import UploadForm from '../components/UploadForm';
import ResultsPanel from '../components/ResultsPanel';

const LandingPage = () => {
    const [results, setResults] = useState(null);

    const handleResults = (data) => {
        setResults(data);
    };

    return (
        <div className="landing-page">
            <h1>Resume Parser</h1>
            <UploadForm onResults={handleResults} />
            {results && <ResultsPanel results={results} />}
        </div>
    );
};

export default LandingPage;