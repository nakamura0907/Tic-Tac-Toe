import Game from "../src/js/Game";
import Player from "../src/js/Player";

describe("Game Class", () => {
  const game = new Game(new Player("○"), new Player("×"));

  it("checkWin", () => {
    expect(game.checkWin([])).toBeFalsy();
    expect(game.checkWin([10, 20, 30])).toBeFalsy();
    expect(game.checkWin([10, 1, 20, 2, 3])).toBeTruthy();
    expect(game.checkWin([10, 4, 5, 6])).toBeTruthy();
    expect(game.checkWin([10, 7, 8, 9])).toBeTruthy();
    expect(game.checkWin([10, 1, 4, 7])).toBeTruthy();
    expect(game.checkWin([10, 2, 5, 8])).toBeTruthy();
    expect(game.checkWin([10, 3, 6, 9])).toBeTruthy();
    expect(game.checkWin([10, 1, 5, 9])).toBeTruthy();
    expect(game.checkWin([10, 3, 5, 7])).toBeTruthy();
  })

  it("getIsWin && this.#isWin", () => {
    game.restart();
    expect(game.getIsWin()).toBeFalsy();
    game.checkWin([1, 2, 3]);
    expect(game.getIsWin()).toBeTruthy();
  })

  it("getIsPlayerATurn && this.#isPlayerATurn", () => {
    expect(game.getIsPlayerATurn()).toBeTruthy();
    game.changePlayerTurn();
    expect(game.getIsPlayerATurn()).toBeFalsy();
  })
})