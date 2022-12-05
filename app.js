const btn = document.querySelector('button');
const items = document.querySelectorAll('input');
const resultDiv = document.querySelector('.result');
const userResultDiv = document.querySelector('.user-result span');
const computerResultDiv = document.querySelector('.computer-result span');
const gameResultDiv = document.querySelector('.game-result span');
const statDiv = document.querySelector('.stat');
const gameNumberDiv = document.querySelector('.game-number span');
const gameWinDiv = document.querySelector('.game-win span');
const gameLoseDiv = document.querySelector('.game-lose span');
const gameDrawDiv = document.querySelector('.game-draw span');

const game = {
  number: 0,
  win: 0,
  lose: 0,
  draw: 0,
};

const selectedItems = {
  user: null,
  computer: null,
};

const selectItems = (e) => {
  selectedItems.user = e.target.dataset.select;
  selectedItems.computer = items[Math.floor(Math.random()*3)].dataset.select;
};

const start = () => {
  if (!selectedItems.user) {
    return alert('Choose your option!');
  };
  
  btn.textContent = 'Play again';
  
  game.number++;
  
  checkResult();
};

const checkResult = () => {
  const userChoice = selectedItems.user;
  const computerChoice = selectedItems.computer;
  
  userResultDiv.textContent = userChoice.toUpperCase();
  computerResultDiv.textContent = computerChoice.toUpperCase();
  
  if (userChoice == computerChoice) {
    gameResultDiv.textContent = 'DRAW';
    game.draw++;
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) {
    gameResultDiv.textContent = 'YOU WIN!';
    game.win++;
  } else {
    gameResultDiv.textContent = 'THE COMPUTER WINS';
    game.lose++;
  };
  
  resultDiv.classList.add('active');

  gameStat();
};

const gameStat = () => {
  gameNumberDiv.textContent = game.number;
  gameWinDiv.textContent = game.win;
  gameLoseDiv.textContent = game.lose;
  gameDrawDiv.textContent = game.draw;

  statDiv.classList.add('active');

  reset();
};

const reset = () => {
  items.forEach(item => item.checked = false);
  selectedItems.user = null;
  selectedItems.computer = null;
};


items.forEach(item => item.addEventListener('click', selectItems));

btn.addEventListener('click', start);