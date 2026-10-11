const pdf = require('pdf-parse');
const fs = require('fs');

const parsePdf = (filePath) => {
    return new Promise((resolve, reject) => {
        let dataBuffer = fs.readFileSync(filePath);
        
        pdf(dataBuffer).then(function(data) {
            // Extract text from PDF
            const text = data.text;
            resolve(text);
        }).catch(err => {
            reject(err);
        });
    });
};

module.exports = parsePdf;