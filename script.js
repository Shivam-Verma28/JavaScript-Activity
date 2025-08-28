let chance = 5;
let your_score = 0;
let computer_score = 0;

function play(userchoice) {
  if (chance <= 0) {
    document.getElementById("result").innerHTML = "Game Over! Refresh to play again.";
    return;
  }

  const choice = ["rock", "paper", "scissor"];
  const computerchoice = choice[Math.floor(Math.random() * 3)];

  if (userchoice === computerchoice) {
    // tie
  } else if (
    (userchoice === "paper" && computerchoice === "rock") ||
    (userchoice === "rock" && computerchoice === "scissor") ||
    (userchoice === "scissor" && computerchoice === "paper")
  ) {
    your_score++;
  } else {
    computer_score++;
  }

  chance--;

  if (chance === 0) {
    if (your_score > computer_score) {
      document.getElementById("result").innerHTML =
        "You win!<br>Your Score: " + your_score +
        "<br>Computer Score: " + computer_score;
    } else if (your_score < computer_score) {
      document.getElementById("result").innerHTML =
        "You lost!<br>Your Score: " + your_score +
        "<br>Computer Score: " + computer_score;
    } else {
      document.getElementById("result").innerHTML =
        "It's a Tie!<br>Your Score: " + your_score +
        "<br>Computer Score: " + computer_score;
    }
  } else {
    document.getElementById("result").innerHTML =
      "You chose: " + userchoice + "<br>Computer chose: " + computerchoice +
      "<br>Your Score: " + your_score + "<br>Computer Score: " + computer_score +
      "<br>Chances left: " + chance;
  }
}
