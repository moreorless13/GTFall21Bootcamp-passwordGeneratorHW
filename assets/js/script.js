// Assignment Code
// create generate password button
var generateBtn = document.querySelector("#generate");
// characters and respective string lengths
const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const lowercaseLength = lowercaseAlphabet.length;
const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const uppercaseLength = uppercaseAlphabet.length;
const useableNumbers = '0123456789';
const useableNumbersLength = useableNumbers.length;
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const specialCharactersLength = specialCharacters.length;

// keep track of the user's preferences 
var userPreferences = {
  passwordLength: '',
  useLowerCase: '',
  useUpperCase: '',
  useNumbers: '',
  useSpecialCharacters: ''
};

// prompt to get user's password length preference as a number with constraints min: 8, max: 128
// all invalid responses will restart the getPassword function

function getPasswordLengthPreference() {
  const length = Number(prompt('Please enter a number between 8-128: ', ''));
  if (length < 8 || length > 128 || length == NaN) {
    invalidResponseInput = "Please enter a number between 8-128";
    return generatePassword();
  } else {
    userPreferences.passwordLength = length;
  }
}
// lowercase characters confirmation prompt
function getLowercaseResponse() {
  const lowercase = window.confirm('use lowercase?');
  userPreferences.useLowerCase = lowercase;
}
// uppercase characters confirmation prompt
function getUppercaseResponse() {
  const uppercase = window.confirm('use uppercase?');
  userPreferences.useUpperCase = uppercase;
}
// numbers characters confirmation prompt
function getNumbersResponse() {
  const numbers = window.confirm('use numbers?');
  userPreferences.useNumbers = numbers;
}
// special characters confirmation prompt
function getSpecialCharsResponse() {
  const specialCharacters = window.confirm('use special characters?');
  userPreferences.useSpecialCharacters = specialCharacters;
}

// function calling the prompts for the user preferences 

function getUserPreferences() {
  getPasswordLengthPreference();
  getLowercaseResponse();
  getUppercaseResponse();
  getNumbersResponse();
  getSpecialCharsResponse();
  // console.log(numUseableCharacters);
  // console.log(useableCharactersArray);
}

// function compiling the userPreferences and converting into a password string including and/or excluding preferences based on confirmation prompts
// if no types of characters are confirmed (if user hits cancel on all confirmation prompts) this will create an invalid/undefined password

function generatePassword() {
  var useableCharactersArray = [];
  getUserPreferences();
  var lowerArray = []; 
  var upperArray = [];
  var numberArray = [];
  var specialCharsArray = [];
  if (userPreferences.useLowerCase) {
    lowerArray = Array.from(lowercaseAlphabet);
    for (var i = 0; i < lowercaseLength; i++) {
      useableCharactersArray.push(lowerArray[i]);
    };
  } else {
    console.log(useableCharactersArray.length);
  };
  if (userPreferences.useUpperCase) {
    upperArray = Array.from(uppercaseAlphabet);
    for (var i = 0; i < uppercaseLength; i++) {
      useableCharactersArray.push(upperArray[i]);
    };
  } else {
    console.log(useableCharactersArray.length);
  };
  if (userPreferences.useNumbers) {
    numberArray = Array.from(useableNumbers);
    for (var i = 0; i < useableNumbersLength; i++) {
      useableCharactersArray.push(numberArray[i]);
    };
  } else {
    console.log(useableCharactersArray.length);
  };
  if (userPreferences.useSpecialCharacters) {
    specialCharsArray = Array.from(specialCharacters);
    for (var i = 0; i < specialCharactersLength; i++) {
      useableCharactersArray.push(specialCharsArray[i]);
    };
  } else {
    console.log(useableCharactersArray.length);
  };
  // final if statement to validate whether user has input the minimum requirements resulting in a useableCharacterArray.length > 0
  // if no character types are confirmed, this if statement will force user to start from the getPasswordLengthPreference via generatePassword calling getUserPreferences
  if (useableCharactersArray.length == 0) {
    return generatePassword();
  } else {
    var password = '';
    for (let i = 0; i < userPreferences.passwordLength; i++) {
      password += useableCharactersArray[Math.floor(Math.random()*useableCharactersArray.length)]
    };
  };
  return password;
};

// function calling the generatePassword function to initiate prompts 
// displays the randomized password 

function writePassword() { 
  password = generatePassword();
  passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Write password to the #password input

generateBtn.addEventListener("click", writePassword);