
# Windows Explorer Clone
This project is a web-based clone of Windows Explorer, built using modern web technologies. It features a two-panel layout where the left panel displays the folder structure, and the right panel displays the direct subfolders of the selected folder.

## Technologies Used

### Backend
Runtime: Bun (preferred) or Node.js
Framework: Elysia (TypeScript-based web framework)
Database: PostgreSQL
ORM: None (raw SQL queries are used)
API: RESTful API

### Frontend
Framework: Vue 3 with Composition API
Styling: Plain CSS (custom styles for a Windows Explorer-like design)
Icons: Font Awesome (for folder and action icons)
Build Tool: Vite

### Database
Database: PostgreSQL
Initialization: SQL script (seed.sql) for seeding sample data

### Containerization
Docker: Used to containerize the backend, frontend, and database.
Docker Compose: Used to manage multi-container Docker applications.

### Project Structure

    windows-explorer-clone/
    ├── apps/
    │   ├── backend/              # Backend application (Elysia + Bun)
    │   │   ├── src/              # Source code
    │   │   │   ├── api/          # API routes
    │   │   │   ├── db/           # Database connection and queries
    │   │   │   ├── services/     # Business logic
    │   │   │   └── index.ts      # Entry point
    │   │   ├── Dockerfile        # Dockerfile for backend
    │   │   └── package.json      # Backend dependencies
    │   └── frontend/             # Frontend application (Vue 3 + Vite)
    │       ├── src/              # Source code
    │       │   ├── components/   # Vue components
    │       │   ├── views/        # Vue views
    │       │   └── main.ts       # Entry point
    │       ├── Dockerfile        # Dockerfile for frontend
    │       └── package.json      # Frontend dependencies
    ├── seed.sql                  # SQL script for seeding sample data
    ├── docker-compose.yml        # Docker Compose configuration
    └── README.md                 # Project documentation


## Prerequisites
Docker: Install Docker from [here](https://docs.docker.com/engine/install/).

## Running the Project with Docker

Clone the Repository

    git clone https://github.com/thegilangpratama/infokes.git

    cd infokes

Build and Start the Containers

    docker-compose up --build

### Access the Application
Frontend: 
Open your browser and navigate to http://localhost:5173.

Backend API:
Access the backend API at http://localhost:3000.

### Stop the Containers
docker-compose down


## Running the Project Locally (Without Docker)

### Backend
Navigate to the backend directory:

    cd apps/backend

Install dependencies:

    bun install

Start the backend server:

    bun run src/index.ts

The backend will be available at `http://localhost:3000.`

### Frontend

Navigate to the frontend directory:

    cd apps/frontend

Install dependencies:

    npm install

Start the frontend development server:

    npm run dev


The frontend will be available at `http://localhost:5173.`
Database Seeding

## API Endpoints

### Backend API

Get All Folders: `GET /folders`
Get Subfolders: `GET /folders/:id/subfolders`

### Frontend Features

Left Panel: Displays the folder structure.
Right Panel: Displays the direct subfolders of the selected folder.

The frontend uses plain CSS for styling. You can customize the styles in the main.css file or add a CSS framework like Bootstrap or Tailwind CSS.
Contributing

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

Elysia for the backend framework.
Vue 3 for the frontend framework.
Docker for containerization.
