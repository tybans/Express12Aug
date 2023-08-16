gitPromise = new Promise(resolve, reject) =>{
    resolve(1)
    reject(new error, "Error")
    }
}




// Assignment 1: Simple Delayed Message with Promise

// Objective: Understand the basic creation and usage of a Promise.

// Task:

// Create a function called delayedMessage that returns a Promise.
// Inside the function, use the setTimeout method to delay the resolution of the Promise for 2 seconds.
// After the 2-second delay, the Promise should resolve with the message: "This message is delaye





// Assignment 2: User Data Validation with Promises

// Objective: Understand how to validate data using Promises and handle both valid and invalid results.

// Scenario:
// You're building an API client to register users. Before sending user data to the API, you want to validate it locally to ensure all required fields are present and meet certain criteria.

// Task:

// Create a function validateUser that takes a user object with properties username, email, and age.
// Return a Promise from this function.
// The Promise should resolve if:
// The username is a non-empty string and is at least 3 characters long.
// The email contains an "@" and a "." character.
// The age is a number and greater than 18.
// If any of these conditions aren't met, the Promise should reject with an appropriate error message.
// Test the validateUser function with various user data and handle both resolution and rejection.