# Running the Example

To run this example, execute your app.js with Node.js. When you access http://localhost:3000/trigger-event from your browser or a tool like Postman, it triggers an event that notifies the observer. The observer then processes the data first as a microtask (immediately displaying the data) and then as a macrotask (displaying the data after a delay), showcasing the use of both types of tasks in async programming within a Node.js and Express.js context.
