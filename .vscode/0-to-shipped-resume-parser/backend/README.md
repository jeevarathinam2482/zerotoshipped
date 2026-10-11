# Backend README

# 0 to Shipped Resume Parser - Backend

This is the backend part of the "0 to Shipped Resume Parser" project. The backend is built using Node.js and Express, and it connects to a MongoDB database to handle resume parsing and comparison with job descriptions.

## Project Structure

- `src/`: Contains the main application code.
  - `app.js`: Entry point for the Express server.
  - `config/`: Configuration files.
    - `db.js`: MongoDB connection configuration.
  - `controllers/`: Contains request handling logic.
    - `resumeController.js`: Functions for handling resume-related requests.
  - `middleware/`: Custom middleware for the application.
    - `errorHandler.js`: Middleware for error handling.
  - `models/`: Mongoose models for MongoDB.
    - `ResumeMatch.js`: Model for storing resume match data.
  - `routes/`: Defines the API routes.
    - `resumeRoutes.js`: Routes for handling resume-related requests.
  - `services/`: Contains business logic.
    - `comparisonService.js`: Logic for comparing resumes with job descriptions.
  - `utils/`: Utility functions.
    - `parsePdf.js`: Functions for parsing PDF files.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd 0-to-shipped-resume-parser/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.

## Running the Application

To start the server, run:
```
npm start
```

The server will be running on `http://localhost:5000` (or the port specified in your environment variables).

## API Endpoints

- `POST /api/resume/upload`: Upload a resume PDF for parsing.
- `GET /api/resume/results`: Retrieve the results of the resume parsing, including score, present skills, and missing skills.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.