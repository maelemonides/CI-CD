# React Mongo Front

This project is a React-based frontend for interacting with the FastAPI backend that manages products. It includes components for listing products, performing a health check, and displaying a home page.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/maelemonides/ci-cd.git
   cd react-mongo-frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the React application:

   ```bash
   npm start
   ```

The application will be accessible at `http://localhost:3000` by default.

## Project Structure

- **App.js:** The main entry point of the React application. It defines the routes using `react-router-dom`.

- **components/Home.js:** Displays a list of products on the home page.

- **components/ListProducts.js:** Displays a list of products fetched from the backend.

- **components/HealthCheck.js:** Performs a health check on the backend to ensure it is running.

- **api.js:** Contains functions for making API requests to the FastAPI backend.

## Available Routes

- **Home:** `/` - Displays a list of products on the home page.

- **List Products:** `/products` - Displays a list of products fetched from the backend.

- **Health Check:** `/health` - Performs a health check on the backend.

## Configuration

- Ensure that the backend API URL is correctly set in the `api.js` file.

```javascript
// Update the backend URL if needed
const API_URL = 'http://localhost:8000';
```

## Additional Notes

- This README provides basic usage instructions. For advanced features or customization, refer to the source code and relevant component files.

- Customize the Nginx configuration (`nginx.conf`) based on your deployment requirements.

- For production deployment, consider optimizing the React application and configuring a proper server setup.
