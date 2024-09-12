# MERN Product Store

A full-stack MERN application to manage products. This project includes both frontend and backend implementations.

## Project Structure

- **`backend/`**: Contains the backend server and API endpoints.
- **`frontend/`**: Contains the React frontend application.

## Technologies Used

### Frontend

- **React.js**
- **Vite** - Build tool and development server
- **Chakra UI** - UI component library
- **Zustand** - State management
- **React Router** - Routing
- **Framer Motion** - Animations
- **React Icons** - Icons

### Backend

- **Node.js**
- **Express.js** - Web framework
- **MongoDB** with **Mongoose** - Database
- **Dotenv** - Environment variable management

### Development Tools

- **Nodemon** - Auto-reloads backend server
- **ESLint** - Linting
- **Cross-env** - Cross-platform environment variable setting

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/asha-saini06/mern-product-store.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd mern-product-store
   ```

3. **Install backend dependencies:**

   ```bash
   cd backend
   npm install
   ```

4. **Install frontend dependencies:**

   ```bash
   cd ../frontend
   npm install
   ```

5. **Set up environment variables:**

   Create a `.env` file in the `backend` folder with the following content:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

   Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## Scripts

### Backend

- **`npm run dev`**: Launches the backend server in development mode, with live reloading enabled via `nodemon`. The environment is set to development.
  
- **`npm run build`**: Installs the necessary dependencies for both the backend and frontend, then builds the frontend project for production.

- **`npm start`**: Runs the backend server in production mode. The environment is set to production using `cross-env` for cross-platform compatibility.

### Frontend

- **`npm run dev`**: Starts the Vite development server for the frontend, enabling hot module replacement and a fast development experience.

- **`npm run build`**: Compiles the frontend code into a production-ready bundle using Vite.


## Running the Project

1. **Start the backend server:**

   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend development server:**

   ```bash
   cd ../frontend
   npm run dev
   ```

3. **Open your browser and visit:**

   - **Frontend**: `http://localhost:3000`
   - **Backend API**: `http://localhost:5000`

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork the Repository:**
   - Click the "Fork" button at the top right of the project repository page on GitHub.

2. **Create a New Branch:**
   - Create a new branch for your changes:
     ```bash
     git checkout -b feature-branch
     ```

3. **Make Your Changes:**
   - Implement your changes and commit them:
     ```bash
     git commit -m 'Add new feature'
     ```

4. **Push to the Branch:**
   - Push your branch to your forked repository:
     ```bash
     git push origin feature-branch
     ```

5. **Open a Pull Request:**
   - Go to the original repository and open a pull request from your branch.

Thank you for your contributions!

