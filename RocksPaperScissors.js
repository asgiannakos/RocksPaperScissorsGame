//takes the user's choice as an input
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!')
  };
};

//Randomly sets up a computers choice
const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return 'rock';
  } if (choice === 1) {
    return 'scissors';
  } else {
    return 'paper';
  };
};

//choosing a winner based on the outcomes of the choices
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It was a tie.'
  } if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return `${computerChoice} beats rock, you Lose :(`;
      } else {
        return `Rock beats ${computerChoice}, you Win :)`;
      };
  } if (userChoice === 'scissors') {
      if (computerChoice === "rock") {
        return `${computerChoice} beats scissors, you Lose :(`;
      } else {
        return `Scissors beats ${computerChoice}, you Win :)`;
      };
  } if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return `${computerChoice} beats paper, you Lose :(`;
      } else {
        return `Paper beats ${computerChoice}, you Win :)`;
      };
  } if (userChoice === 'bomb') {
    return 'Bomb beats everything, You Win!';
  };
};

//runs the previous funcions
const playGame = choice => {
  userChoice = getUserChoice(choice);
  computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice}`);
  console.log(`The computer chose ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

//starts the game with a users choice
playGame('paper');
