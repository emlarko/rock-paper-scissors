
var options = ["R", "P", "S"];

var playGame = function() {
  var userChoice = window.prompt("Enter R, P, or S:");


  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);

 
  if (userChoice === computerChoice) {
    window.alert("It's a tie!");

 
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    window.alert("You win!");


  } else {
    window.alert("You lost!");
  }
 
  var playAgain = window.confirm("Play again?");

  if (playAgain) {
    playGame();
  }
};

playGame();