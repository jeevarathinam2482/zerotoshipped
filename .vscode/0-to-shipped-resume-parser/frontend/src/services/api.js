import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const uploadResume = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error uploading resume: ' + error.message);
    }
};

export const getResumeResults = async (resumeId) => {
    try {
        const response = await axios.get(`${API_URL}/results/${resumeId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching resume results: ' + error.message);
    }
};