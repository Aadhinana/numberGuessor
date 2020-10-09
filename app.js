let min = 1;
let max = 10;
let winningNumber = getRandomNumber(min, max);
let guessLeft = 3;

// Get references from html
let minNumber = document.querySelector(".min-num");
let maxNumber = document.querySelector(".max-num");
const guessInput = document.querySelector("#guess-input");
const guessBtn = document.querySelector("#guess-btn");
const message = document.querySelector(".message");

// set min and max
minNumber.innerHTML = min;
maxNumber.innerHTML = max;

// Listen to guess event
guessBtn.addEventListener("click", guessNumber);

function guessNumber(e) {
  e.preventDefault();

  //   reduce guess by one
  guessLeft -= 1;

  //   convert guessInput into a number
  let guess = parseInt(guessInput.value);

  //   if guess is within the guess range
  if (guess < min || guess > max || isNaN(guess)) {
    return alert("Enter a guess between min and max");
  }

  //   if guess is correct
  if (guess === winningNumber) {
    // Game over and won
    setMessage(`You got the number!`, "green");

    playAgain();
  } else if (guessLeft > 0) {
    //   Wrong guess, guesses left
    setMessage(`Your guess was wrong, ${guessLeft} tries left`, "red");
    // clear input
    guessInput.value = "";
  } else {
    //   Wrong guess, Game over
    setMessage(`Tries ran out! ${winningNumber} was the right guess`, "red");

    playAgain();
  }
}

// set Message
function setMessage(msg, color) {
  message.innerHTML = msg;
  message.style.color = color;
  guessInput.style.borderColor = color;
}

// playagain
function playAgain() {
  // disable input
  guessInput.disabled = true;
  // Change the text to Play again and add a class to listen to events on this.
  guessBtn.innerText = "PLAY AGAIN?";
  guessBtn.classList.add("play-again");
}

// Listen to play again button with '.play-again'
guessBtn.addEventListener("mousedown", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("play-again")) {
    window.location.reload();
  }
});

// Get random winning number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
