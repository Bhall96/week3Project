// var arrays
var characterLength = 8;
var choiceArr = [];
var specialCharArr = ["`","~","!","@","#","$","%","^","&","(",")","-","_","=","+","[","{","}","]",":",";","<",",",">",".","?","/","'",];
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArr = ["0","1","2","3","4","5","6","7","8","9"];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
   var correctPrompts = getPrompts();
   var passwordText = document.querySelector("#password");
   
   if (correctPrompts){
  var newPassword = generatePassword();

  passwordText.value = newPassword;
   }
   else{
    passwordText.value = "";
   }
}

// generatePassword function
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts(){
  characterLength = parseInt(prompt("how many characters would you like your password? (8 - 128)"))

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number 8 - 128");
    return false;
  }

  if (confirm("would you like lower case letters?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (confirm("would you like upper case letters?")) {
    choiceArr = choiceArr.concat(uperCaseArr);
  }

  if (confirm("would you like special characters?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }

  if (confirm("would you like special characters?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }

  if (confirm("would you like numbers?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}