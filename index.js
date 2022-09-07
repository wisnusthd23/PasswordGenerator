let panjangpassword = document.getElementById("panjangpassword");
let password = document.getElementById("password");

function generatePassword(len) {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`";

  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
}

function getPassword() {
  const passwordBaru = generatePassword(panjangpassword.value);
  password.value = passwordBaru;
  // alert("password sudah di generate");
}

function savePassword() {
  document.title = password.value;
  saveButton.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(`password saya: ${document.title}`));
  saveButton.setAttribute("download", "MyPasswordGeneratorLOG.txt");
}

function copyPassword() {
  password.select();
  document.execCommand("copy");
  alert("Text berhasil dicopy");
}
