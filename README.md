# CI-CD

# Schéma
 
[![API Backend Docker Image CI](https://github.com/maelemonides/CI-CD/actions/workflows/docker-image-back.yml/badge.svg)](https://github.com/maelemonides/CI-CD/actions/workflows/docker-image-back.yml)

[![Docker Image CI](https://github.com/maelemonides/CI-CD/actions/workflows/docker-image-front.yml/badge.svg)](https://github.com/maelemonides/CI-CD/actions/workflows/docker-image-front.yml)

[![Node.js CI](https://github.com/maelemonides/CI-CD/actions/workflows/node.js.yml/badge.svg)](https://github.com/maelemonides/CI-CD/actions/workflows/node.js.yml)

[![Python application](https://github.com/maelemonides/CI-CD/actions/workflows/python-app.yml/badge.svg)](https://github.com/maelemonides/CI-CD/actions/workflows/python-app.yml)

![ci-cd drawio](https://github.com/maelemonides/CI-CD/assets/101704314/603a93ef-6399-452e-a8ac-136dbe1f36d7)

1. **HTTPS Connection for Web App (Ports 443 and 80):**
   - Enable secure communication between the web app and users using HTTPS on ports 443 and 80. Facilitate bidirectional data exchange through requests and responses.

2. **Local or Global State Management for Progress Tracking:**
   - Implement a mechanism for managing local or global states within the web app to track and visualize the progress of various tasks or processes.

3. **Linkage Between Web App and Backend for API Requests:**
   - Establish a connection between the web app and the backend to facilitate seamless API requests and responses. Ensure a robust communication channel for data exchange.

4. **Database Connection on Port 8000:**
   - Set up a connection to the database on port 8000. Allow the web app and backend to interact with the database to perform data operations.

5. **Monitoring by Application Monitoring System (AM):**
   - Employ an Application Monitoring (AM) system to oversee the entire architecture. Receive real-time alerts and notifications in case of anomalies or issues within the system.

6. **Connection for Graph Data Feed:**
   - Create a dedicated connection for fetching data to populate graphs within the web app. Ensure a reliable flow of data to visualize information effectively.

7. **Retrieve and Display Schemas:**
   - Implement functionality to retrieve and display schemas within the web app. Enable users to interact with and comprehend the structure of underlying data.

These points outline the key features and connections within the architecture, covering secure web app connections, state management, backend integration, database access, monitoring, data feed for graphs, and schema visualization.


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
