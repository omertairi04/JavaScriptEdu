// Pick a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const userGuess = Number(guessInput.value);
  attempts++;

  if (!userGuess) {
    message.textContent = "⚠️ Please enter a number!";
    message.style.color = "orange";
    return;
  }

  if (userGuess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}. You guessed it in ${attempts} tries.`;
    message.style.color = "green";
  } else if (userGuess < secretNumber) {
    message.textContent = "⬆️ Too low! Try again.";
    message.style.color = "blue";
  } else {
    message.textContent = "⬇️ Too high! Try again.";
    message.style.color = "red";
  }
}
