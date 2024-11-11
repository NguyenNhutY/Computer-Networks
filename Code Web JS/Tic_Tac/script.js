const selectBox = document.querySelector(".select-box");
const selectBtnX = selectBox.querySelector(".options .playerX");
const selectBtnO = selectBox.querySelector(".options .playerO");
const playBoard = document.querySelector(".play-board");
const players = document.querySelector(".players");
const allBox = document.querySelectorAll("section span");
const resultBox = document.querySelector(".result-box");
const wonText = resultBox.querySelector(".won-text");
const replayBtn = resultBox.querySelector("button");

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";
let playerSign = "X";
let runBot = true;

window.onload = () => {
  allBox.forEach((box) => {
    box.addEventListener("click", () => clickedBox(box));
  });
};

selectBtnX.addEventListener("click", () => startGame());
selectBtnO.addEventListener("click", () => startGame("O"));

function startGame(selectedPlayer = "X") {
  selectBox.classList.add("hide");
  playBoard.classList.add("show");
  players.setAttribute("class", "players active player");
  playerSign = selectedPlayer;
  runBot = true;
}

function toggleActivePlayerClass() {
  players.classList.toggle("active");
}

function displayResultBox(winnerText) {
  resultBox.classList.add("show");
  playBoard.classList.remove("show");
  wonText.innerHTML = winnerText;
}

function replayGame() {
  window.location.reload();
}

function clickedBox(element) {
  if (players.classList.contains("player")) {
    playerSign = "O";
    players.classList.remove("active");
  } else {
    players.classList.add("active");
  }

  element.innerHTML = `<i class="${playerSign === "X" ? playerXIcon : playerOIcon}"></i>`;
  element.setAttribute("id", playerSign);
  selectWinner();
  element.style.pointerEvents = "none";
  playBoard.style.pointerEvents = "none";

  setTimeout(() => {
    bot(runBot);
  }, getRandomDelay());
}

function getRandomDelay() {
  return ((Math.random() * 1000) + 200).toFixed();
}

replayBtn.addEventListener("click", replayGame);

// Rest of your code remains unchanged
