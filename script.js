// Assignment Code
var generateBtn = document.querySelector("#generate");

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




function generatePassword() {
  let userPreferences = [];
  const length = Number(prompt('Please enter a number between 8-128: ', ''));
  if (length < 8 || length > 128 || length == NaN) {
    invalidResponseInput = "Please enter a number between 8-128";
    return generatePassword();
  } else {
    userPreferences.push(length);
  }
  const lowercase = window.confirm('use lowercase?') ? userPreferences.concat('abcdefghijklmnopqrstuvwxyz') : false;
  const uppercase = window.confirm('use uppercase?') ? userPreferences.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ') : false;
  const number = window.confirm('use numbers?') ? userPreferences.concat('0123456789') : false;
  const specialCharacters = window.confirm('use special characters?') ? userPreferences.concat("!#$%&'()*+,-./:;<=>?@[]^_`{|}~") : false; 
  console.log(userPreferences)
  
  // for (let i = 0; i < userPreferences.length; i++) {
    //   myArray.push(str.charAt(i));
    // // let password = '';
    // // for (let i = 0; i < length; i++) {
    // //   password += [Math.floor(Math.random()*length)]
    // console.log(userPreferences)
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






  // var userPreferences = getUserPreferences();
  // var passwordLength = userPreferences.length;
  // var lowerArray = userPreferences.useLowercase;
  // var upperArray = userPreferences.useUppercase;
  // var numberArray = userPreferences.useNumbers;
  // var specialCharsArray = userPreferences.useSpecialChars;
  // var combineArrays = lowerArray + "," + upperArray + "," + numberArray + "," + specialCharsArray;
  // var tempArray = [''];
  // let randomChar = '';
  // for (let i = 0; i <= passwordLength; i++) {
  //   password += combineArrays[Math.floor(Math.random()*combineArrays.length)];
  //   tempArray.push(randomChar)
  // }
  // console.log(tempArray);
  // console.log(combineArrays);
  // console.log(combineArrays.length);
  // console.log(randomChar);


  // console.log(userPreferences);
  // console.log(userPreferences.length);
  // console.log(userPreferences.useLowercase);
  // console.log(userPreferences.useUppercase);
  // console.log(userPreferences.useNumbers);
  // console.log(userPreferences.useSpecialChars);



  // let passwordLength = userPreferences.length


// Write password to the #password input




