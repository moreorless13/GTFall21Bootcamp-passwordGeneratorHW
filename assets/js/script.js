// Assignment Code
var generateBtn = document.querySelector("#generate");

const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const useableNumbers = '0123456789';
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// tried to start with a validation form here

/*
const responseValidation = (counter) => {
  counter = {counter : 0}
  Object.defineProperty(counter, "reset", {
    get : function () {this.counter = 0;}
  });

  Object.defineProperty(counter, "levelUp", {
    get : function () {this.counter++;}
  });

  passwordConditions = [length, lowercase, uppercase, numbers, specialCharacters];

  passwordConditions["length"] = Number(prompt('Please enter a number between 8-128: ', ''));

  if (passwordConditions["length"] < 8 || passwordConditions["length"] > 128 || passwordConditions["length"] == NaN) {
    invalidResponseInput = "Please enter a number between 8-128";
    counter.reset();
    return responseValidation();
  } else {
    counter.levelUp();
  }
  passwordConditions["lowercase"] = window.confirm('use lowercase?') ? counter.levelUp() : delete passwordConditions["lowercase"];
  passwordConditions["uppercase"] = window.confirm('use uppercase?') ? counter.levelUp() : delete passwordConditions["uppercase"];
  passwordConditions["numbers"] = window.confirm('use numbers?') ? counter.levelUp() : delete passwordConditions["numbers"];
  passwordConditions["specialCharacters"] = window.confirm('use special characters?') ? counter.levelUp() : delete passwordConditions["specialCharacters"]; 
};*/


var userPreferences = {
  passwordLength: '',
  useLowerCase: '',
  useUpperCase: '',
  useNumbers: '',
  useSpecialCharacters: ''
};
var numUseableCharacters = 0;

function getPasswordLengthPreference() {
  const length = Number(prompt('Please enter a number between 8-128: ', ''));
  if (length < 8 || length > 128 || length == NaN) {
    invalidResponseInput = "Please enter a number between 8-128";
    return generatePassword();
  } else {
    userPreferences.passwordLength = length;
  }
}

function getLowercaseResponse() {
  const lowercase = window.confirm('use lowercase?');
  userPreferences.useLowerCase = lowercase;
}

function getUppercaseResponse() {
  const uppercase = window.confirm('use uppercase?');
  userPreferences.useUpperCase = uppercase;
}

function getNumbersResponse() {
  const numbers = window.confirm('use numbers?');
  userPreferences.useNumbers = numbers;
}

function getSpecialCharsResponse() {
  const specialCharacters = window.confirm('use special characters?');
  userPreferences.useSpecialCharacters = specialCharacters;
}

var useableCharactersArray = [];

function getUserPreferences() {
  getPasswordLengthPreference();
  getLowercaseResponse();
  getUppercaseResponse();
  getNumbersResponse();
  getSpecialCharsResponse();
  var lowerArray = []; 
  var upperArray = [];
  var numberArray = [];
  var specialCharsArray = [];
  if (userPreferences.useLowerCase) {
    lowerArray = Array.from(lowercaseAlphabet);
    numUseableCharacters += 26;
  } else {
    numUseableCharacters;
  };
  if (userPreferences.useUpperCase) {
    upperArray = Array.from(uppercaseAlphabet);
    numUseableCharacters += 26;
  } else {
    numUseableCharacters;
  };
  if (userPreferences.useNumbers) {
    numberArray = Array.from(useableNumbers);
    numUseableCharacters += 10;
  } else {
    numUseableCharacters;
  };
  if (userPreferences.useSpecialCharacters) {
    specialCharsArray = Array.from(specialCharacters);
    numUseableCharacters += 30;
  } else {
    numUseableCharacters;
  };
  // console.log(numUseableCharacters);
  // console.log(useableCharactersArray);
}

console.log(useableCharactersArray);
console.log(userPreferences); 

function generatePassword() {
  getUserPreferences();
  var password = '';
  for (let i = 0; i < userPreferences.passwordLength; i++) {
      password += useableCharactersArray[Math.floor(Math.random()*numUseableCharacters)]
  };
};

function writePassword() { 
  password = generatePassword();
  passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


// function getUserLengthPreference(userInput) {
//   var userInput = Number(prompt("Enter password length", ''));
//   if (!userInput) {
//     return getUserLengthPreference();
//   } else if (userInput < 8 || userInput > 128) {
//     return getUserLengthPreference();
//   } else {
//     return userInput;
//   }
// }

// function getUserLowercaseResponse(lowercaseResponse) {
//   var lowercaseResponse = window.confirm("use lowercase?");
//   if (lowercaseResponse === true) {
//     return convertToArray(lowercaseAlphabet);
//   }
//   return lowercaseResponse;
// }

// function getUserUppercaseResponse(uppercaseResponse) {
//   var uppercaseResponse = window.confirm("use uppercase?");
//   if (uppercaseResponse === true) {
//     return convertToArray(uppercaseAlphabet);
//   }
//   return uppercaseResponse;
// }

// function getUserNumbersResponse(numbersResponse) {
//   var numbersResponse = window.confirm("use numbers?")
//   if (numbersResponse === true) {
//     return convertToArray(useableNumbers);
//   }
//   return numbersResponse;
// }

// function getUserSpecialCharsResponse(specialCharsResponse) {
//   var specialCharsResponse = window.confirm("use special characters?")
//   if (specialCharsResponse === true) {
//     return convertToArray(specialCharacters);
//   }
//   return specialCharsResponse;
// }

// function getUserPreferences(getLengthResponse, getLowercaseResponse, getUppercaseResponse, getNumbersResponse, getSpecialCharsResponse) {
//   var getLengthResponse = getUserLengthPreference();
//   var getLowercaseResponse = getUserLowercaseResponse();
//   var getUppercaseResponse = getUserUppercaseResponse();
//   var getNumbersResponse = getUserNumbersResponse();
//   var getSpecialCharsResponse = getUserSpecialCharsResponse();

//   var userPreferences = {
//     length: getLengthResponse,
//     useLowercase: getLowercaseResponse,
//     useUppercase: getUppercaseResponse,
//     useNumbers: getNumbersResponse,
//     useSpecialChars: getSpecialCharsResponse
//   }

//   return userPreferences;
// }






//   var userPreferences = getUserPreferences();
//   var passwordLength = userPreferences.length;
//   var lowerArray = userPreferences.useLowercase;
//   var upperArray = userPreferences.useUppercase;
//   var numberArray = userPreferences.useNumbers;
//   var specialCharsArray = userPreferences.useSpecialChars;
//   var combineArrays = lowerArray + "," + upperArray + "," + numberArray + "," + specialCharsArray;
//   var tempArray = [''];
//   let randomChar = '';
//   for (let i = 0; i <= passwordLength; i++) {
//     password += combineArrays[Math.floor(Math.random()*combineArrays.length)];
//     tempArray.push(randomChar)
//   }
//   console.log(tempArray);
//   console.log(combineArrays);
//   console.log(combineArrays.length);
//   console.log(randomChar);


//   console.log(userPreferences);
//   console.log(userPreferences.length);
//   console.log(userPreferences.useLowercase);
//   console.log(userPreferences.useUppercase);
//   console.log(userPreferences.useNumbers);
//   console.log(userPreferences.useSpecialChars);



//   let passwordLength = userPreferences.length


// Write password to the #password input
