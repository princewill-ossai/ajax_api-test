const randomMove = Math.random();
const coinHead = document.querySelector(".head img");
const coinTail = document.querySelector(".tail img");
const startBtn = document.querySelector("button");
const result = document.querySelector("#result");
const move = document.getElementById("move");
let coinFlip = "";
let headMsg = "You choosed Head";
let tailMsg = "You choosed tail";

coinHead.addEventListener("click", () => {
  move.innerHTML = headMsg;
});
coinTail.addEventListener("click", () => {
  move.innerHTML = tailMsg;
});

function gamePlan() {
  if (randomMove < 0.5) {
    coinFlip = coinHead;
  } else {
    coinFlip = coinTail;
  }

  if (move.innerHTML === 'Head' && coinFlip === coinHead) {
    result.innerHTML = `The coin fliped ${coinFlip}!`;
  } else if (coinFlip === coinTail) {
    result.innerHTML = `The coin fliped ${coinFlip}!`;
  }

  if (move.innerHTML === 'Tail' && coinFlip === coinTail) {
    result.innerHTML = `The coin fliped ${coinFlip}!`;
  } else if (coinFlip === coinHead) {
    result.innerHTML = `The coin fliped ${coinFlip}!`;
  }
}

startBtn.addEventListener("click", () => {
  gamePlan();
});
