# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.

A token ia received from an API server when a user has logged in with proper credentials like a username and password. That token will allow the user access into the web application with authorization from the server.

2. What steps can you take in your web apps to keep your data secure?

You can create Private Routes that restrict any person without the proper credentials from accessing certain URL routes within your application. Pairing this with validation so that it requires a user to create a profile or account on your app, and using those credentials to login (receiving a token from the backend API server to allow authorization) and access certain URL paths that were previously restricted. 

3. Describe how web servers work.

A Web Server is both the machine components like a cpu, hard drive, and modem, that makeup the server machine, and the code that runs on the server for the backend data base. We use a local machine like a laptop to send requests to server's and wait for a response from the server in order to provide authorization to a web app or simply render the web app on our local machine. 

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create, Read, Update, Delete is what the CRUD acronym stands for. HTTP methods we use to interact with the API are:

GET - which is READ from the CRUD acronym, we are requesting to get data from the API so we can read it and inspect it. 
POST - which is CREATE from the CRUD acronym, we are requesting to add something newly created to the data on the API
PUT - which is UPDATE from the CRUD acronym, we are requesting to update some piece of data that was already part of the data on the API
DELETE - which is DELETE from the CRUD acronym, we are requesting to delete a specific part of the data that is hosted on the API