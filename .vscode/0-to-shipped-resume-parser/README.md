# 0 to Shipped Resume Parser

This project is a web application designed to parse resumes and compare them against job descriptions. The application provides a score based on the match between the resume and the job description, highlighting present and missing skills.

## Project Structure

The project is divided into two main parts: the frontend and the backend.

### Frontend

The frontend is built using React and Vite. It includes the following components:

- **UploadForm**: A component for uploading resume PDFs.
- **ResultsPanel**: Displays the results of the resume parsing, including the score, present skills, and missing skills.
- **SkillList**: Lists the skills extracted from the resume.

The frontend communicates with the backend API to upload resumes and retrieve parsing results.

### Backend

The backend is built using Express and connects to a MongoDB database. It includes:

- **Controllers**: Handle requests related to resume parsing and comparison.
- **Models**: Define the structure of the data stored in MongoDB.
- **Routes**: Set up the API endpoints for the frontend to interact with.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd 0-to-shipped-resume-parser
   ```

2. Install dependencies for the frontend:
   ```
   cd frontend
   npm install
   ```

3. Install dependencies for the backend:
   ```
   cd ../backend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm run dev
   ```

The application should now be running on `http://localhost:3000` (or the port specified in your configuration).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.