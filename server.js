// Import required modules
const express = require('express');
const path = require('path');

// Initialize Express app
const app = express();

// Define the port the server will run on
// Use the PORT environment variable if available (for deployment), otherwise default to 5001
// Avoid 3000 as React dev server often uses it
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON request bodies
app.use(express.json());

// Placeholder for API routes
// TODO: Add API routes for plans, sites, etc.
app.get('/api/hello', (req, res) => {
  // Simple test route
  res.json({ message: 'Hello from the VAST BOM Planner API!' });
});

// Serve static files from the React app build directory in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Serve the index.html file for any routes not handled by the API
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  // Simple message for development environment root access
  app.get('/', (req, res) => {
    res.send('API is running in development mode...');
  });
}

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
