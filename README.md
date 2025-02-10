# VCC Assignment 1
#Linux Mint Clone (Virtual Machine 2) acts as a client and sends a HTTP request to the server to receive the message. 
#Linux Mint (Virtual Machine 1) acts as a server and responds with a simple message. 
#Linux Mint Clone (Virtual Machine 1) prints the response message. 

# The code is included in index.js javascript file of Linux Mint (Virtual Machine 1) which hosts the API on port 3000. 
#To test from Linux Mint (Virtual Machine 1), index.js is executed and the message "Microservice running on port 3000" is displayed which means the server is listening on port 3000 as expected
#On Linux Mint Clone (Virtual Machine 2), in order to call the API running on virtual machine 1, curl command is executed specifying the IP address of Virtual Machine 1 and the port.
# If the message "This is my first VCC assignment" is displayed on Machine 2, then the message is received successfully from virtual machine 1 microservice running the API. 
