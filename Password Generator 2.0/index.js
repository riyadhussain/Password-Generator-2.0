// Character sets
const baseCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
const numbers = "0123456789".split("");
const symbols = "~`!@#$%^&*()_-+={}[]|:;<>,.?/".split("");

// DOM Elements
const passwordOneEl = document.getElementById("password-one-el");
const passwordTwoEl = document.getElementById("password-two-el");
const btnEl = document.getElementById("btn");

// Helper Functions
function getRandomChar(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => console.log("Password copied to clipboard: " + text))
    .catch((err) => console.error("Failed to copy: ", err));
}

function generatePassword(length, characters) {
  return Array(length)
    .fill()
    .map(() => getRandomChar(characters))
    .join("");
}

// Main Function
function generatePasswords() {
  const length = parseInt(document.getElementById("password-length").value);
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSymbols = document.getElementById("include-symbols").checked;

  let characters = [...baseCharacters];
  if (includeNumbers) characters = characters.concat(numbers);
  if (includeSymbols) characters = characters.concat(symbols);

  passwordOneEl.textContent = generatePassword(length, characters);
  passwordTwoEl.textContent = generatePassword(length, characters);
}

// Event Listeners
btnEl.addEventListener("click", generatePasswords);

passwordOneEl.addEventListener("click", () =>
  copyToClipboard(passwordOneEl.textContent)
);
passwordTwoEl.addEventListener("click", () =>
  copyToClipboard(passwordTwoEl.textContent)
);

