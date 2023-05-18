$(document).ready(function() {
// to-do stop the function if the user presses cancel on the prompt
  function generatePassword() {
    var length;
    while (true) {
      length = parseInt(prompt("Please enter the desired password length. Must be between 8 and 128 characters."));
      if (length >= 8 && length <= 128) break;
      alert("Invalid input. Length must be between 8 and 128 characters.");
      
    }

    var useLowercase = confirm("Do you want to include lowercase characters?");
    var useUppercase = confirm("Do you want to include uppercase characters?");
    var useNumbers = confirm("Do you want to include numeric characters?");
    var useSpecial = confirm("Do you want to include special characters?");

    if (!useLowercase && !useUppercase && !useNumbers && !useSpecial) {
      alert("You must select at least one character type.");
      return generatePassword(); // restart the function if no type selected
    }

    var password = "";
    var possible = "";

    if (useLowercase) possible += "abcdefghijklmnopqrstuvwxyz";
    if (useUppercase) possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useNumbers) possible += "0123456789";
    if (useSpecial) possible += "!@#$%^&*()-_=+{}[]|:;,<>.?/";

    for (var i = 0; i < length; i++)
      password += possible.charAt(Math.floor(Math.random() * possible.length));

    return password;
  }

  $("#generate").on("click",()=>{
    var password = generatePassword();
    var passwordText = $("#password");
    passwordText.val(password);
  });
  
});
