// set a variable that hooks into the generate button in our html
var generateBtn = document.querySelector("#generate");

// setting up our empty arrays for character choices
let password = [];
let finalPassword = [];

// create functions to randomly generate characters and create constant to randomly pick generators from

const randomGenFunc = {
  lower: randomLowerGen,
  upper: randomUpperGen,
  number: randomNumberGen,
  symbol: randomSymbolGen
};

function randomLowerGen () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomUpperGen () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomNumberGen () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomSymbolGen () {
  const symbols = "!@#$%^&*?<>";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Create function that prompts the user to choose a character amount that must be between 8-128 characters and what type of characters to include
function generatePassword() {
  var charAmount = prompt("How many characters do you want?", "must be between 8-128");
// make it so they have to put an answer between 8-128 
  if (charAmount >= 8 && charAmount <= 128) {
    finalPassword.length == charAmount;
  } else {
    alert("password must be between 8-128 characters");
  return generatePassword();
  }
// then asks for the characters to be included if length is accepted
  const includeLower = confirm("Do you want to include lower case letters in your password?");
  const includeUpper = confirm("Do you want to include upper case letters in your password?");
  const includeNumber = confirm("Do you want to include numbers in your password?");
  const includeSpecial = confirm("Do you want to include special characters letters in your password?");
   if (includeLower === true) {
     var lower = lowerCaseGen();
     finalPassword += password.concat(lower)
   }
   if (includeUpper === true) {
    var upper = upperCaseGen();
    finalPassword += password.concat(upper)
  }
  if (includeNumber === true) {
    var number = numberGen();
    finalPassword += password.concat(number)
  }
  if (includeLower === true) {
    var special = specialGen();
    finalPassword += password.concat(special)
  }
  // for (var i = 0; 1 <= charAmount; i++) {
  //   password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
  // }



console.log(finalPassword);

}
generatePassword();




// if (charAmount < 8 || charAmount > 128) {
//   alert("please enter a character amount between 8 and 128");
// } else {
// }
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// var 






// simple loop to choose characters

let values = "all characters in types user selected"
let charAmount = "answer to amount prompt"

