import "./scss/style.scss";

import Player from "./js/Player";
import Game from "./js/Game";

const playerA = new Player("○");
const playerB = new Player("×");

const game = new Game(playerA, playerB);



/**
 * ゲーム部分
 */
document.querySelectorAll(".board__square").forEach((element) => {
  element.addEventListener("click", (event) => {
    const target = event.target;

    // まだパネルにアイコンがない時 かつ まだ勝敗が決まっていないとき
    if (!target.textContent && !game.getIsWin()) {

      let player = game.getCurrentPlayer();

      target.textContent = player.getIcon();
      player.pushNumber(target.dataset.number)

      game.checkWin(player.getNumbers());

      if (game.getIsWin() === false) {
        game.changePlayerTurn();
        player = game.getCurrentPlayer();
        document.getElementById("turn").textContent = player.getIcon();
      } else {
        document.getElementById("turn").textContent = player.getIcon() + "の勝ちです。";
      }
    }
  })
})

document.getElementById("reset").addEventListener("click", () => {
  location.reload();
  /**
   * ○のターンでリセットすると二回○のターンになる
   */
  // game.restart();
  // playerA.resetNumbers();
  // playerB.resetNumbers();
  // document.querySelectorAll(".board__square").forEach((element) => {
  //   element.textContent = "";
  // })
  // document.getElementById("turn").textContent = playerA.getIcon();
})