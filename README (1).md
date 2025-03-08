
Task Manager
Project Overview
The Task Manager is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to create, read, update, and delete tasks. Each task includes fields such as title, description, status, and due date.

This project is designed to help users organize their tasks efficiently and provides a simple, intuitive interface for managing tasks.

Installation Steps
1. Prerequisites
Node.js (v16 or higher)
npm (Node Package Manager)
MongoDB (local or cloud instance)

2. Backend Setup
Clone the repository:
Navigate to the backend directory

3. Install dependencies: 
Run 'npm install' on ur terminal or bash
Create a .env file in the backend folder and add your MongoDB connection string:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/task-manager?retryWrites=true&w=majority
PORT=5000

4. Start the backend server:
Run 'node server.js' on the terminal.

5. Frontend Setup
Navigate to the frontend folder:
Install dependencies:
Run 'npm install' on your terminal

6. Start the frontend development server:
Run 'npm run dev' on ur terminal
Open your browser and navigate to http://localhost:5173.

API Endpoint Documentation
http://localhost:5000
http://localhost:5000/api/tasks