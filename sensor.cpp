#include <iostream> // Include the iostream library for input and output operations
#include <cstdlib> // Include the cstdlib library for random number generation
#include <ctime> // Include the ctime library for time functions
#include <thread> // Include the thread library for sleep functionality
#include <chrono> // Include the chrono library for time duration handling

int main() {
     //calling standard library's srand() and seed it with current time 
     std::srand(std::time(nullptr)); // Seed the random number generator 

     while (true) // infinite loop that simulates sensor data generation 
     {
      int temp = std::rand() % 40; // Generate a random temperature between 0 and 39
      std::cout << "TEMP:" << temp << std::endl; // Output the temperature to the console
      std::this_thread::sleep_for(std::chrono::seconds(1)); // Sleep for 1 second
     }

        return 0; // Return 0 to indicate successful completion
}


