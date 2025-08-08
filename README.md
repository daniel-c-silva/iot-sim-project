# My IoT Simulation Project

This project is a full-stack application that simulates a real-time Internet of Things (IoT) sensor. It was a great opportunity to build a complete system from scratch, starting with a C++ sensor program and ending with a live web dashboard.

---

## Project Overview

The application consists of three main components:

1. **C++ Sensor Program**  
   Generates mock temperature data every second.

2. **Node.js Backend**  
   Runs the C++ sensor program, processes its output, and streams data to the front-end via WebSockets.

3. **HTML/JavaScript Frontend**  
   Displays a dynamic dashboard visualizing real-time sensor data using Chart.js.

---

## Key Features 

- **Real-Time Data Simulation:** C++ sensor program outputs new temperature readings every second.  
- **Inter-Process Communication:** Node.js backend interacts directly with the C++ sensor process to read data.  
- **WebSocket Data Streaming:** Live, efficient streaming of sensor data to the browser without polling.  
- **Dynamic Web Dashboard:** Displays latest temperature and live chart of historical data.  
- **Visual Feedback:** Dashboard colors and animations adapt based on temperature and connection status.

---

## Technologies Used 

- **Frontend:** HTML, CSS, JavaScript, Chart.js  
- **Backend:** Node.js, Express.js, child_process (to run C++), ws (WebSockets)  
- **Sensor:** C++ (iostream, chrono)

---

## How to Run the Project 

### Prerequisites
- Node.js installed  
- C++ compiler (e.g., g++) installed

### Steps

1. **Compile the C++ Sensor Program**  
   ```bash
   cd sensor
   g++ sensor.cpp -o sensor
Install Backend Dependencies

bash
Copiar
Editar
cd ../backend
npm install
Start the Backend Server

bash
Copiar
Editar
npm start
This runs the Node.js server and the C++ sensor program.

Open the Dashboard
Open index.html in your browser to view real-time data and charts.

Future Goals 

More Sensors: Simulate additional data types (humidity, pressure) and add visualizations.

Authentication: Implement user login and secure data access.

Data Persistence: Store sensor data in a database to track historical trends over time.

Feel free to reach out if you have any questions or want to contribute!
