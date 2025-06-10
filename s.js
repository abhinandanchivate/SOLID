// orchestration of user registration process
function handleUserRegistration(user) {
  // validation method
  validatingUserInput(user);
  // save user details
  saveUserDetails(user);
  // send email to user
  sendEmailToUser(user);
}
// 1. validate the user input
// 2. save the user details to the DB
// 3. send an email to the user

function validatingUserInput(user) {
  // user validation logic
  if (!user.name || user.name.length < 3) {
    throw new Error("Name must be at least 3 characters long");
  }
  if (!user.email || !user.email.includes("@")) {
    throw new Error("Invalid email address");
  }
} // SRP

function saveUserDetails(user) {
  // save user details to the DB
  console.log("Saving user details to the database");
  // simulate a save operation
}
function sendEmailToUser(user) {
  // send email to the user
  console.log(`Sending email to ${user.email} with subject: Welcome!`);
}
