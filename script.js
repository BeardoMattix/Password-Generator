//This password generator will create a random password between 8 and 132 characters depending on the inputs the user chooses. 

//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays to use for random password
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declarations 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// This prompt will confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Loop: if the users answer is outside the parameters, this will tell them to choose the right number of characters.  
  while(confirmLength <= 7 || confirmLength >= 133) {
      alert("Password length must be between 8-132 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // Alert to confirm the numberof characters in the users password.   
      alert("Your password will have " + confirmLength + " characters.");

    // Determine parameters of password 
    var confirmSpecialCharacter = confirm("Click OK to confirm you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm you would like to include uppercase characters");
    
    // Loop to catch if user answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK to confirm you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK to confirm you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to confirm you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm you would like to include uppercase characters");   
    } 

      // This will assign an action to the password parameters (based on user inputs).
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      // Empty string is filled based on the for loop by selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}