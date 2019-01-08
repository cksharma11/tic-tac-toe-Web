const symbols = ['X', 'O'];
const winningConditions = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['1', '5', '9'],
  ['3', '5', '7'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['3', '6', '9']
];

const result = document.getElementById('result');
const moves = [[], []];

let moveCount = 0;
const colors = ['green', 'yellow'];
const player1 = prompt('Enter the name of first player');
const player2 = prompt('Enter the name of second player');
const players = [player2, player1];

const getCurrentPayer = function() {
  document.getElementById('current_player').innerText = `${
    players[moveCount % 2]
  }'s Move`;
};

const placeSymbol = function(event) {
  moveCount++;
  moves[moveCount % 2].push(event.target.id);
  document.getElementById(event.target.id).innerText = symbols[moveCount % 2];
  document.getElementById(event.target.id).style.background =
    colors[moveCount % 2];
  hasWon(moves[moveCount % 2]);
};

const hasWon = function(playerMoves) {
  if (isSubsetOf(winningConditions, playerMoves)) {
    result.innerText = `${players[moveCount % 2]} has won`;
    resetOnClick();
  }
  if (moveCount == 9 && result.innerText == '') {
    result.innerText = `Match Draw`;
    resetOnClick();
  }
};

const resetOnClick = function() {
  for (let id = 1; id < 10; id++) {
    document.getElementById(id).onclick = '';
  }
};

const isSubsetOf = function(superset, subsetCandidate) {
  return superset.some(set => {
    return set.every(element => subsetCandidate.includes(element));
  });
};

const startGame = function(event) {
  if (document.getElementById(event.target.id).innerText == '') {
    getCurrentPayer();
    placeSymbol(event);
  }
};
