const passwordField = document.querySelector('#generated-password');
const generateButton = document.querySelector('#generate');

//Checkboxes
const passwordLength = document.querySelector('#password-length');
const ifSymbols = document.querySelector('#symbols');
const ifNumbers = document.querySelector('#numbers');
const ifLowercase = document.querySelector('#lowercase');
const ifUppercase = document.querySelector('#uppercase');

const symbols = [];
const numbers = [];
const lowercase = [];
const uppercase = [];

for (let i = 33; i < 48; i++) {
    symbols.push(String.fromCharCode(i));
}
for (let i = 48; i < 58; i++) {
    numbers.push(String.fromCharCode(i));
}
for (let i = 97; i < 123; i++) {
    lowercase.push(String.fromCharCode(i));
}
for (let i = 65; i < 91; i++) {
    uppercase.push(String.fromCharCode(i));
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePassword() {
    let passwordLen = passwordLength.value;
    let includeSymbols = false;
    let includeNumbers = false;
    let includeLowercase = false;
    let includeUppercase = false;
    if (ifSymbols.checked) includeSymbols = true;
    if (ifNumbers.checked) includeNumbers = true;
    if (ifLowercase.checked) includeLowercase = true;
    if (ifUppercase.checked) includeUppercase = true;

    //All possible
    let arrayPool = [];
    if (includeSymbols && includeNumbers && includeLowercase && includeUppercase) {
        arrayPool = [...symbols, ...numbers, ...lowercase, ...uppercase];
    }

    //All for symbols
    else if (includeSymbols && includeNumbers && includeLowercase) {
        arrayPool = [...symbols, ...numbers, ...lowercase];
    }
    else if (includeSymbols && includeNumbers && includeUppercase) {
        arrayPool = [...symbols, ...numbers, ...uppercase];
    }
    else if (includeSymbols && includeLowercase && includeUppercase) {
        arrayPool = [...symbols, ...lowercase, ...uppercase];
    }

    //All for numbers
    else if (includeSymbols && includeNumbers && includeUppercase) {
        arrayPool = [...symbols, ...numbers, ...uppercase];
    }
    else if (includeNumbers && includeLowercase && includeUppercase) {
        arrayPool = [...numbers, ...lowercase, ...uppercase];
    }
    else if (includeSymbols && includeNumbers && includeLowercase) {
        arrayPool = [...symbols, ...numbers, ...lowercase];
    }

    //All for lowercase
    else if (includeNumbers && includeLowercase && includeUppercase) {
        arrayPool = [...numbers, ...lowercase, ...uppercase];
    }
    else if (includeSymbols && includeLowercase && includeUppercase) {
        arrayPool = [...symbols, ...lowercase, ...uppercase];
    }
    else if (includeSymbols && includeNumbers && includeLowercase) {
        arrayPool = [...symbols, ...numbers, ...lowercase];
    }

    //All for uppercase
    else if (includeNumbers && includeLowercase && includeUppercase) {
        arrayPool = [...numbers, ...lowercase, ...uppercase];
    }
    else if (includeSymbols && includeLowercase && includeUppercase) {
        arrayPool = [...symbols, ...lowercase, ...uppercase];
    }
    else if (includeSymbols && includeNumbers && includeUppercase) {
        arrayPool = [...symbols, ...numbers, ...uppercase];
    }

    else {
        alert('To create a strong password you must pick at least 3 options!');
        return;
    }

    let pass = '';
    for (let i = 0; i < passwordLen; i++) {
        let item = arrayPool[Math.floor(Math.random() * arrayPool.length)];
        pass += item;
    }
    passwordField.innerText = pass;
}

generateButton.addEventListener('click', generatePassword);