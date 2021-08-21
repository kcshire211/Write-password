// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  alert("Password must be between 8-128 characters. A secure password may contain at least one capital letter, number, and one special character.");
  prompt("Choose a number of characters between 8-128 in length.");
  prompt("Use a capital letter? Yes or No.");
  prompt("Use a number? Yes or No.");
  prompt("Use a special character? Yes or No.");
  
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
  }

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    Symbol: getRandomSymbol
  };
  
  function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSymbol(){
    const symbols = "!@#$%^&*()[]{}<>?,./=+-_`~"
    return symbols[Math.floor(Math.random() * symbols.length)]
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




