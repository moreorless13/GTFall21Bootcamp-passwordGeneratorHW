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



function getUserPreferences() {
  getPasswordLengthPreference();
  getLowercaseResponse();
  getUppercaseResponse();
  getNumbersResponse();
  getSpecialCharsResponse();
  // console.log(numUseableCharacters);
  // console.log(useableCharactersArray);
}

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

function writePassword() { 
  password = generatePassword();
  passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Write password to the #password input

generateBtn.addEventListener("click", writePassword);