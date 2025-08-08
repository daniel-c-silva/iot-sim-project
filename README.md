My IoT Simulation Project
This project is a full-stack application I built to simulate a real-time Internet of Things (IoT) sensor. It was a great opportunity for me to build a complete system from the ground up, starting with a C++ program and ending with a live web dashboard.

This application is composed of three main parts:

A C++ program that acts as the "sensor," generating mock temperature data.

A Node.js back-end that runs the C++ program, processes its output, and streams the data to the web page using WebSockets.

An HTML/JavaScript front-end that provides a dynamic dashboard to visualize the real-time sensor data using Chart.js.

Key Features ✨
Real-Time Data Simulation: My C++ program generates new temperature data every second.

Inter-Process Communication: I designed the Node.js back-end to communicate directly with the C++ program to read its output.

WebSocket Data Streaming: I moved from a polling method to using WebSockets to push data from the server to the browser in real-time. This provides a more efficient and live experience for the user.

Dynamic Web Dashboard: The HTML page displays the latest temperature reading and a live chart of historical data.

Visual Feedback: The dashboard's colors and animations change dynamically based on the temperature readings and the connection status.

Technologies I Used 🛠️
Frontend: HTML, CSS, JavaScript, Chart.js (for data visualization)

Backend: Node.js, Express.js (for the web server), child_process (for running the C++ program), ws (for WebSockets)

Sensor: C++ (with iostream and chrono)

How to Run the Project 🚀
To run this project, you need to have Node.js and a C++ compiler (like g++) installed on your system.

1. Compile the C++ Sensor Program:
Navigate to the sensor directory and compile the C++ file.

g++ sensor.cpp -o sensor

2. Install Node.js Dependencies:
Navigate to the backend directory and install the required packages.

cd backend
npm install

3. Run the Backend Server:
From the backend directory, start the server. This will also automatically run the C++ sensor program.

npm start

4. View the Dashboard:
Open the index.html file in your web browser. You will see the real-time sensor data and the live chart.

Future Goals for this Project 🔮
More Sensors: I'd like to expand the C++ program to simulate multiple data types (like humidity and pressure) and add corresponding visualizations to the dashboard.

Authentication: I want to add user login functionality and protect the data with authentication.

Data Persistence: I'd like to store sensor data in a database to view historical trends over a longer period.
