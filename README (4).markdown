# AIMOOV Admin

## Overview
AIMOOV Admin is a backend server for managing user data, exercises, sessions, and programs for the AIMOOV fitness platform. It provides APIs for handling user authentication, exercise management, session creation, and program configuration.

## Features
- **User Management**: Register, authenticate, and manage user profiles with details like email, password, weight, height, and fitness goals.
- **Exercise Management**: Create and manage exercises with attributes like muscle groups, difficulty levels, and avatars.
- **Session Management**: Define fitness sessions with translated names and descriptions, including exercises, warmups, and stretching routines.
- **Program Management**: Organize sessions into programs with customizable frequency and visibility settings.
- **Authentication**: Secure user authentication using JWT and password hashing with bcrypt.

## Tech Stack
- **Backend**: Node.js with Express
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT, bcrypt
- **Language**: TypeScript
- **Dependencies**: See `package.json` for full list (e.g., express, mongoose, bcrypt, jsonwebtoken)

## Prerequisites
- Node.js (v16.x or higher)
- npm (v8.x or higher)
- MongoDB (local or cloud instance, e.g., MongoDB Atlas)
- TypeScript (v5.5.4 or higher)

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/trad024/AIMOOV-admin.git
   cd AIMOOV-admin
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory:
     ```bash
     cp .env.example .env
     ```
   - Update `.env` with your MongoDB connection string, e.g.:
     ```
     MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/
     ```

4. **Build the Project**:
   ```bash
   npm run build
   ```

5. **Run the Application**:
   - For development (with auto-restart):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

   The server runs on `http://localhost:3000` (or the port specified in your configuration).

## Database Schema
- **User**: Stores user details (e.g., `fname`, `lname`, `email`, `pwd`, `weight`, `height`, `goal`) with password reset functionality.
- **Exercise**: Defines exercises with properties like `id_Ex`, `max_score`, `min_score`, `zone_corps`, `muscles`, and `group` (default or challenge).
- **NewSession**: Manages fitness sessions with `translated_name`, `translated_muscles`, `exercices`, `warmup`, and `stretching` sections, linked to `Exercise` via ObjectId.
- **Program**: Organizes sessions into programs with `description`, `level`, `duration`, `frequency`, and `is_public` settings.

## Usage
- Start the server and interact with the APIs using tools like Postman or cURL.
- Example endpoints (assuming standard REST API setup):
  - `POST /api/users/register`: Create a new user.
  - `POST /api/users/login`: Authenticate a user and receive a JWT.
  - `GET /api/exercises`: Retrieve all exercises.
  - `POST /api/sessions`: Create a new session with exercises.
  - `GET /api/programs`: List all fitness programs.

## Development
- **Code Style**: Follow TypeScript conventions as configured in `tsconfig.json`.
- **Build**: Use `npm run build` to compile TypeScript to JavaScript in the `dist` folder.
- **Run in Dev Mode**: Use `npm run dev` for live reloading during development.

## License
This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.