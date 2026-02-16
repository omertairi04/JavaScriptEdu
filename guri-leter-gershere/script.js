let perdoruesi = ""; 
let kompjuteri = "";
function guri() {
  perdoruesi = "guri";
  kompjuteriSelect();
}
function leter() {
  perdoruesi = "leter";
  kompjuteriSelect();
}
function gershere() {
  perdoruesi = "gershere";
  kompjuteriSelect();
}

let userScore = document.getElementById("userScore");
let computerScore = document.getElementById("computerScore");
userScore.textContent = "0";
computerScore.textContent = "0";

let userWins = 0;
let computerWins = 0;

function kompjuteriSelect() {
  const random = Math.floor(Math.random() * 3); // 0 deri 2
  if (random === 0) kompjuteri = "guri";
  else if (random === 1) kompjuteri = "leter";
  else kompjuteri = "gershere";

  if (
    (perdoruesi === "guri" && kompjuteri === "gershere") ||
    (perdoruesi === "leter" && kompjuteri === "guri") ||
    (perdoruesi === "gershere" && kompjuteri === "leter")
  ) {
    window.alert(`FITOI PERDORUESI ${perdoruesi} - ${kompjuteri}`);
    userWins += 1;
    userScore.textContent = userWins;
  } else if (
    (kompjuteri === "guri" && perdoruesi === "gershere") ||
    (kompjuteri === "leter" && perdoruesi === "guri") ||
    (kompjuteri === "gershere" && perdoruesi === "leter")
  ) {
    window.alert(`FITOI KOMPJUTERI ${kompjuteri} - ${perdoruesi}`);
    computerWins += 1;
    computerScore.textContent = computerWins;
  } else {
    window.alert("Baraz");
  }

  if (userWins === 5) {
    document.body.style.backgroundColor = `green`;
  }
  if (computerWins === 5) {
    document.body.style.backgroundColor = `red`;
  }
}

function reset() {
  userWins = 0;
  computerWins = 0;
  userScore.textContent = "0";
  computerScore.textContent = "0";
}
