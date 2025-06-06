let boxes = document.querySelectorAll(".link");
let bot = document.querySelector(".bot"); // fixed selector
let msgContanier = document.querySelector(".msg-contanier");
let msg = document.querySelector("#msg");
let newButton = document.querySelector("#new-button");

let turnO = true;

const winner1 = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContanier.classList.add("hide");
};

boxes.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.innerText === "") {
      if (turnO) {
        link.innerText = "O";
        turnO = false;
      } else {
        link.innerText = "X";
        turnO = true;
      }
      link.disabled = true;
      checkWinner();
    }
  });
});

const disableBoxes = () => {
  boxes.forEach((link) => {
    link.disabled = true;
  });
};

const enableBoxes = () => {
  boxes.forEach((link) => {
    link.disabled = false;
    link.innerText = ""; // reset button content
  });
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, the Winner is ${winner}`;
  msgContanier.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winner1) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
      showWinner(pos1Val);
    }
  }
};

newButton.addEventListener("click", resetGame);
bot.addEventListener("click", resetGame);
