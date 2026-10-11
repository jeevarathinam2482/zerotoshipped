# Frontend Resume Parser

This is the frontend part of the "0 to Shipped Resume Parser" project. The application allows users to upload their resumes in PDF format and receive feedback on their skills compared to a job description.

## Project Structure

- **public/**: Contains static assets like the favicon.
- **src/**: Contains the main application code.
  - **assets/**: Contains images and logos used in the application.
  - **components/**: Contains reusable components such as the upload form and results panel.
  - **pages/**: Contains the main pages of the application.
  - **services/**: Contains API service functions for interacting with the backend.
  - **styles/**: Contains CSS styles for the application.
  - **utils/**: Contains utility functions for data formatting.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd 0-to-shipped-resume-parser/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` (or the port specified in your terminal).

## Features

- Upload a resume in PDF format.
- View the score based on the resume's content.
- See a list of skills present in the resume.
- Identify missing skills compared to a job description.

## Environment Variables

Create a `.env` file in the root of the `frontend` directory and add the necessary environment variables as specified in the `.env.example` file.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.