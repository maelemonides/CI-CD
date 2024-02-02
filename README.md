# CI-CD

# Schéma
 
[![API Backend Docker Image CI](https://github.com/maelemonides/CI-CD/actions/workflows/docker-image-back.yml/badge.svg)](https://github.com/maelemonides/CI-CD/actions/workflows/docker-image-back.yml)

[![Docker Image CI](https://github.com/maelemonides/CI-CD/actions/workflows/docker-image-front.yml/badge.svg)](https://github.com/maelemonides/CI-CD/actions/workflows/docker-image-front.yml)

[![Node.js CI](https://github.com/maelemonides/CI-CD/actions/workflows/node.js.yml/badge.svg)](https://github.com/maelemonides/CI-CD/actions/workflows/node.js.yml)

[![Python application](https://github.com/maelemonides/CI-CD/actions/workflows/python-app.yml/badge.svg)](https://github.com/maelemonides/CI-CD/actions/workflows/python-app.yml)

![ci-cd drawio](https://github.com/maelemonides/CI-CD/assets/101704314/603a93ef-6399-452e-a8ac-136dbe1f36d7)

1) Connexion user web app en https (port 443 port 80). Flux aller retour requêtes réponses.

2) Gestion des états locaux ou globaux pour suivre la progression.

3) Lien entre la web app et le back end pour effectuer les requetes.

4) Connexion BDD port 8000.

5) AM surveille l'ensemble de l'architecure pour informer en cas d'anomalies.

6) Connexion pour alimenter les graphs.

7) Recuperer et afficher les schémas.

Certainly! Below is a template for your README.md file that explains what your full project does and provides instructions on how to start the project using Docker Compose. Feel free to customize it based on your specific project details:


This project is a full-stack application that combines a FastAPI backend with a MongoDB database and a React frontend. It provides functionality to manage products, perform health checks, and display a list of products.

## Features

- **FastAPI Backend:**
  - Implements CRUD operations for product management.
  - Provides a health check endpoint to ensure the backend is responsive.

- **MongoDB Database:**
  - Persists product data for the backend.

- **React Frontend:**
  - Displays a home page with a list of products.
  - Allows users to view products, perform health checks, and manage products through the backend.

## Getting Started

To run the full project locally, you need [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-full-project.git
   cd your-full-project
   ```

2. Start the project using Docker Compose:

   ```bash
   docker-compose up -d
   ```

   This command will build and start the backend, MongoDB, and frontend services.

3. Access the application:

   - The FastAPI backend will be accessible at [http://localhost:8000](http://localhost:8000).
   - The React frontend will be accessible at [http://localhost](http://localhost).

4. Stop the services:

   ```bash
   docker-compose down
   ```

   This will stop and remove the containers.

## Configuration

- Customize the Nginx configuration (`nginx.conf`) in the `docker-compose.yml` file based on your deployment requirements.

- Ensure that your backend API URL is correctly set in the React frontend's `api.js` file.

```javascript
// Update the backend URL if needed
const API_URL = 'http://localhost:8000';
```

## Additional Notes

- For production deployment, consider optimizing the React application and configuring a proper server setup.

- Explore each service's specific directories (`./api` for FastAPI, `./react-mongo-frontend` for React) for additional configuration and source code details.

- Detailed API documentation for the FastAPI backend can be accessed at [http://localhost:8000/docs](http://localhost:8000/docs).

```

Make sure to replace placeholders such as `your-username` and `your-full-project` with your actual GitHub username and the name of your project repository. Additionally, update the content as needed based on any additional features or customization in your project.
