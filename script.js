const turnElement = document.getElementById("turn");
const SquareElements = document.querySelectorAll(".board__square");

const playerIcon = [
  "○",
  "×"
];
let currentTurn = playerIcon[0];

let isWin = false;
const winNumber = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let playerANumbers = [];
let playerBNumbers = [];

/**
 * .board__squareのパネルを変更する
 */
const changeSquare = (target) => {
  target.textContent = currentTurn;
}

/**
 * numberを配列に追加する
 */
const addNumber = (target) => {
  if (currentTurn === playerIcon[0]) {
    playerANumbers.push(Number(target.dataset.number));
  } else {
    playerBNumbers.push(Number(target.dataset.number));
  }
}

/**
 * 配列の中にwinNumberと一致する組み合わせがあるのか判定する
 */
const checkWin = () => {
  let target;
  let icon;
  if (currentTurn === playerIcon[0]) {
    target = playerANumbers;
    icon = playerIcon[0];
  } else {
    target = playerBNumbers;
    icon = playerIcon[1];
  }

  const result = winNumber.some((ary) => {
    return ary.every((value) => {
      return target.includes(value)
    })
  });

  if (result === true) {
    turnElement.textContent = "勝者: " + icon;
    isWin = true;
  }
}

/**
 * ターンを変更して、テキストも変更する
 */
const changeTurn = () => {
  if (isWin === false) {
    if (currentTurn === playerIcon[0]) {
      currentTurn = playerIcon[1];
      turnElement.textContent = playerIcon[1];
    } else {
      currentTurn = playerIcon[0];
      turnElement.textContent = playerIcon[0];
    }
  }
}

SquareElements.forEach((element) => {

  element.addEventListener("click", (event) => {
    const target = event.target;

    // まだパネルにアイコンがない時 かつ まだ勝敗が決まっていないとき
    if (!target.textContent && isWin ===false) {
      changeSquare(target);

      addNumber(target);
      checkWin();

      changeTurn();
    }

  })

})

/**
 * ゲームのリセット
 */
document.getElementById("reset").addEventListener("click", () => {
  SquareElements.forEach((element) => {
    element.textContent = "";
  })
  turnElement.textContent = playerIcon[0];
  playerANumbers = [];
  playerBNumbers = [];
  isWin = false;
})