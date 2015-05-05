Guadalajara Training Example Code
----

This code represents some of the examples that are used in StrongLoop training. Each subdirectory contains a different set of example code. Note that this is the final solution, and each directory may comprise various individual exercies.

Be sure to run `npm install` in each directory that you are trying to run!

---

## Day 1 Exercises

### #1

1. Create a function which accepts two numbers and returns the sum (addition) AND product (multiplication) in an object.

2. Create a function which takes a person's name as an argument and returns the name with the possesive suffix concatenated on it. Do _not_ alter the original argument!


### #2

1. Create a function which calculates the Fibonacci sequence and returns the first number in the sequemce over 1000. The sequence is obtained by adding the previous two numbers in the sequenuence together:

0 1 1 2 3 5 8 13 21

(_For added difficulty, try using a recursive function!_)

2. Create a function which accepts a noun and returns the plural form of that noun. Be sure to cover edge cases like "person" to "people". Also, be sure to audit the input to determine that the value is a string!


### #3

1. Create a simple "Math" module with four functions: add, subtract, multiply, and divide. Be sure to export each of these functions.


### #4

1. Create a new package.json file for your project, follow all of the prompts and inspect what you get at the end.

2. Install (and save) the `mathjs` module in your project. Now pull that module into a new script and use one of the methods to get a random integer between 1 and 6 simulating a dice roll.

(You may want to use the documentation here: http://mathjs.org/docs/reference/functions/categorical.html)


### #4

1. Write a small web server in your project.  
  a. Make sure to pull in the `http` module.  
  b. When a user hits the `/` URL return a small bit of "hello world" HTML (what "Content-Type" should you use?).  
  c. When a user hits the `/fibonacci` URL return the Fibonacci sequence (maybe the first 20 numbers?) in a list.

You might consider using the `url` module for parsing the request URL!


## Day 2 Exercises

### #1

1. In your web server from yesterday, write a separate "router" module:
  a. Make sure that it can serve static html, css, and js files to the client, but **only from a /public** directory!  
  b. If a file does not exist, return a 404 error.  
  c. For the root URL path (`/`) serve the "index.html" file from the `/public` directory.


### #2

1. Use the built-in events on our HTTP server to log a message any time someone connects to our server. (Hint: our HTTP server object _is_ an event emitter!) Keep track of the number of connections we have and print the total on each new connection. (What should happen when a user disconnects??)

2. Fire an event from our server any time someone requests the Fibonacci sequence page (in our "router" module) and in our main script, log a message to the console any time a user hits that page.

3. Use the request as a readable stream in order to get the number of Fibonacci numbers a user wants when processing that request.


### #3

1. Use the generator to create new Express application.  
  a. Refactor our Fibonacci route/code to fit into your new Express application and views.  
  b. Write a piece of middleware to log each incoming request. Track requests to the home page versus the Fibonacci page separately.


### #4

1. Create a POST handler for the `/users` endpoint which "creates a new user".  
  a. For our purposes, this can just return a User object, but there is no need to store it.  
  b. Return the new user information as a JSON object.  
  c. Don't forget a route and view with a form to "create" the user from!  

