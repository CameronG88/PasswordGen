// set a variable that hooks into the generate button in our html
var generateBtn = document.querySelector("#generate");

// setting up our empty arrays for character choices
let password = [];
let finalPassword = [];

// create functions to randomly generate characters and create constant to randomly pick generators from

const randomGenFunc = {
  lower: randomLowerGen(),
  upper: randomUpperGen(),
  number: randomNumberGen(),
  symbol: randomSymbolGen(),
};

function randomLowerGen() {
  var lowerChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  console.log(lowerChar);
}
function randomUpperGen() {
  var upperChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  console.log(upperChar);
}
function randomNumberGen() {
  var numberGen = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  console.log(numberGen);
}
function randomSymbolGen() {
  const symbols = "!@#$%^&*?<>";
  var symbolChar = symbols[Math.floor(Math.random() * symbols.length)];
  console.log(symbolChar);

}
// Create function that prompts the user to choose a character amount that must be between 8-128 characters and what type of characters to include
function writePassword() {
  const charAmount = prompt("How many characters do you want?", "must be between 8-128");

  // make it so they have to put an answer between 8-128 

  if (charAmount >= 8 && charAmount <= 128) {
    console.log(charAmount);
  } else {
    alert("password must be between 8-128 characters");
  }

  // then asks for the characters to be included if length is accepted

  const includeLower = confirm("Do you want to include lower case letters in your password?");
  const includeUpper = confirm("Do you want to include upper case letters in your password?");
  const includeNumber = confirm("Do you want to include numbers in your password?");
  const includeSymbol = confirm("Do you want to include special characters letters in your password?");

  console.log(includeLower, includeUpper, includeNumber, includeSymbol);


function generatePassword(includeLower, includeUpper, includeNumber, includeSymbol, charAmount) {

    const typesCount = includeLower + includeUpper + includeNumber + includeSymbol;

    console.log('typesCount: ', typesCount);

    const typesArr = [{ includeLower }, { includeUpper }, { includeNumber }, { includeSymbol }];
    console.log(typesArr);
}
generatePassword();




  //   if (includeLower === true) {
  //     var lower = randomLowerGen();

  //   }
  //   if (includeUpper === true) {
  //     var upper = randomUpperGen();

  //   }
  //   if (includeNumber === true) {
  //     var number = randomNumberGen();

  //   }
  //   if (includeSymbol === true) {
  //     var symbol = randomSymbolGen();

  //   }

  //   for (var i = 0; i < charAmount; i++) {
  //     finalPassword += password.charAt(Math.floor(Math.random() * Math.floor(charAmount.value - 1)));
  //   }


  //   var password = generatePassword();
  //   var passwordText = document.querySelector("#password");
  
  //   passwordText.value = password;

  //   console.log(finalPassword);

  // }
  
//   generatePassword();

}

  generateBtn.addEventListener("click", writePassword);
