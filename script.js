// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  alert("Password must be between 8-128 characters. A secure password may contain at least one capital letter, number, and one special character.");
  prompt("Choose a number of characters between 8-128 in length.");
  prompt("Enter YES if you would like to include a capital letter.");
  prompt("Enter YES if you would like to include a number.");
  prompt("Enter YES if you would like to include a special character.");
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  
  
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//add a series of prompts for the password criteria. refer to the RPS game we did before
//prompt for each: length 8-128, special character, confirm if you want special char, upper/lower
//when done with prompts, password either displayed in page or in alert

