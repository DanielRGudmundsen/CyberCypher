// Ensure the code does not run until the document is fully loaded
$(document).ready(function() {

// Main password generation function
  function generatePassword() {
    var length;

    // This while loop will continuously prompt the user to enter a password length until they enter a valid length (between 8 and 128 characters)
    while (true) {
      length = parseInt(prompt("Please enter the desired password length. Must be between 8 and 128 characters."));
      if (length >= 8 && length <= 128) break;
      alert("Invalid input. Length must be between 8 and 128 characters.");
      // to-do stop the function if the user presses cancel on the prompt
    }

    // These variables will store the user's preferences for what types of characters to include in the password
    var useLowercase = confirm("Do you want to include lowercase characters?");
    var useUppercase = confirm("Do you want to include uppercase characters?");
    var useNumbers = confirm("Do you want to include numeric characters?");
    var useSpecial = confirm("Do you want to include special characters?");

    // If the user doesn't select any character type, it will show an alert and restart the function
    if (!useLowercase && !useUppercase && !useNumbers && !useSpecial) {
      alert("You must select at least one character type.");
      return generatePassword(); // restart the function if no type selected
    }

    var password = "";
    var possible = "";

    // Depending on the user's preferences, different types of characters are added to the pool of possible characters
    if (useLowercase) possible += "abcdefghijklmnopqrstuvwxyz";
    if (useUppercase) possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useNumbers) possible += "0123456789";
    if (useSpecial) possible += "!@#$%^&*()-_=+{}[]|:;,<>.?/";

    // This loop generates the password, character by character, selecting randomly from the pool of possible characters
    for (var i = 0; i < length; i++)
      password += possible.charAt(Math.floor(Math.random() * possible.length));

    return password;
  }

  // When the "Generate Password" button is clicked, the password is generated and then displayed in the #password textarea
  $("#generate").on("click",()=>{
    var password = generatePassword();
    var passwordText = $("#password");
    passwordText.val(password);
  });
  
});
