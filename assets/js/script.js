const passwordEl = document.getElementById("password");
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const strengthText = document.getElementById("strengthText");

lengthSlider.addEventListener("input", () => {
  lengthValue.innerText = lengthSlider.value;
  generatePassword();
});

function generatePassword(){

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+?><:{}[]";

  let allCharacters = "";

  if(uppercaseEl.checked){
    allCharacters += uppercase;
  }

  if(lowercaseEl.checked){
    allCharacters += lowercase;
  }

  if(numbersEl.checked){
    allCharacters += numbers;
  }

  if(symbolsEl.checked){
    allCharacters += symbols;
  }

  if(allCharacters === ""){
    passwordEl.value = "Select options!";
    return;
  }

  let password = "";

  for(let i = 0; i < lengthSlider.value; i++){

    const randomIndex =
      Math.floor(Math.random() * allCharacters.length);

    password += allCharacters[randomIndex];
  }

  passwordEl.value = password;

  checkStrength(password);
}

function copyPassword(){

  passwordEl.select();
  document.execCommand("copy");

  alert("Password Copied!");
}

function checkStrength(password){

  let strength = 0;

  if(password.length >= 8){
    strength++;
  }

  if(/[A-Z]/.test(password)){
    strength++;
  }

  if(/[0-9]/.test(password)){
    strength++;
  }

  if(/[!@#$%^&*()_+?><:{}[\]]/.test(password)){
    strength++;
  }

  if(strength <= 2){
    strengthText.innerHTML =
      "Strength: <span class='weak'>Weak</span>";
  }
  else if(strength === 3){
    strengthText.innerHTML =
      "Strength: <span class='medium'>Medium</span>";
  }
  else{
    strengthText.innerHTML =
      "Strength: <span class='strong'>Strong</span>";
  }
}

generatePassword();