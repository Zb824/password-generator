
var generateBtn = document.querySelector("#generate");

var numberOfChars;
var includeSpecialChars;
var includeLowercase;
var includeUppercase;
var includeNumbers;



var specialChars = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  "(",
  "_",
  "-",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  ";",
  ":",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
];
var numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];
  var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var passwordArray = []; 


function askQuestions() {
  var response = prompt(`How many characters? Must be between 8 and 128`);
  numberOfChars = parseInt(response);

  
  if (numberOfChars < 8 || numberOfChars > 128 || isNaN(numberOfChars)) {
    alert("The password must be between 8 and 128 characters")
    generatePassword()
    return
  }
  includeNumbers = confirm("Do you want to include numbers?");
  
  includeUppercase = confirm("Do you want to include uppercase letters?");
  includeLowercase = confirm("Do you want to include lowercase letters?");
  includeSpecialChars = confirm("Do you want to include special characters?");
}

function passwordCriteria() { 
  if (includeSpecialChars) {
    passwordArray = passwordArray.concat(specialChars);
  }
  if (includeUppercase) {
    passwordArray = passwordArray.concat(upperCase);
  }
  if (includeLowercase) {
    passwordArray = passwordArray.concat(lowerCase);
  }
  if (includeNumbers) {
    passwordArray = passwordArray.concat(numbers);
  }
  if (includeSpecialChars == false && includeLowercase == false && includeUppercase == false && includeNumbers == false) { 
    alert("You must choose at least one criteria")
    generatePassword()
    return
  }
}



function generatePassword() {
  askQuestions(); 
  passwordCriteria() 
  var password = "";
  for (i = 0; i < numberOfChars; i ++) {
    password = password + passwordArray[Math.floor(Math.random() * passwordArray.length)]
  }

  return password
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);



