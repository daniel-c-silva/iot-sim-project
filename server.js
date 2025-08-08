// This file is the backend for the IoT simulation project.
// It uses WebSockets to push real-time data to the client.

const { spawn } = require('child_process');  // Import the spawn function for running the C++ program
const express = require('express');          // Import Express for serving static files
const cors = require('cors');                // Import CORS middleware
const path = require('path');                // Import path module for file paths

// We'll use the 'ws' library for WebSockets
const WebSocket = require('ws');

const app = express();  // Create an instance of the Express application
app.use(cors());        // Enable Cross-Origin Resource Sharing (CORS)

const port = 3000;      // Define the port number for the server

// ! Step 1: Create a WebSocket server on the same port
const wss = new WebSocket.Server({ port: 8080 }); // Create a new WebSocket server

// ! Step 2: Handle WebSocket connections
wss.on('connection', ws => {
    console.log('Client connected via WebSocket');

    // Handle messages from the client (optional, but good practice)
    ws.on('message', message => {
        console.log(`Received message from client: ${message}`);
    });

    // Handle connection closure
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// ! Step 3: Run the C++ program
const sensor = spawn('./sensor');

// ! Step 4: Read the output from the C++ program
sensor.stdout.on("data", (data) => {
    const latestSensorData = data.toString().trim();
    console.log("Received data:", latestSensorData);

    // ! Step 5: Broadcast the new data to all connected WebSocket clients
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            // Send the data as a string
            client.send(latestSensorData);
        }
    });
});
    
// ! Step 6: Handle errors from the C++ process
sensor.on("error", (err) => {
    console.error("Error from the C++ Process:", err);
});

// ! Step 7: Handle the exit event of the C++ program
sensor.on("exit", (code) => {
    console.log(`C++ Process exited with code ${code}`);
});

// ! Step 8: Serve static frontend files
// Note: We'll serve the HTML on a different port than the WebSocket server to avoid conflicts.
app.use(express.static(path.join(__dirname, '../frontend')));

app.listen(port, () => {
    console.log(`Express server is running on http://localhost:${port}`);
});

