// Import dependencies
// Provides functions to send and recieve server requests on the designated port
const express = require('express');
// Provides utilities for working with file and directory paths
const path = require('path');

// Define Variables 
// Defining express as a top-level function to be re-used each time a request is made or the port is being listened to
const app = express();
// A numerical identifier that defines where a network starts and ends
const PORT = 3001;

// Initialize server

// GET Route for Homepage, '/' is the default filepath
app.get('/', (req, res) => 
  //The response for sending a get request to the homepage is to receive our index.html file
  res.sendFile(path.join(__dirname, '/public/index.html')));

// When this file is ran, express listens for connections to our designated port address, and returns a node http.Server with this application as its callback
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
