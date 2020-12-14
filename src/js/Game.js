class Game {
  #currentPlayer;
  #playerA;
  #playerB;

  #isPlayerATurn = true;
  #isWin = false;
  #winNumbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  /**
   * @param {Object} playerAObject 
   * @param {Object} playerBObject 
   */
  constructor(playerAObject, playerBObject) {
    this.#playerA = playerAObject;
    this.#playerB = playerBObject;
    this.#currentPlayer = this.#playerA;
  }

  /**
   * @return {Object}
   */
  getCurrentPlayer() {
    return this.#currentPlayer;
  }

  /**
   * @return {boolean}
   */
  getIsPlayerATurn() {
    return this.#isPlayerATurn;
  }

  /**
   * @return {boolean}
   */
  getIsWin() {
    return this.#isWin;
  }

  /**
   * 引数numbersがthis.#winNumbersと一致するか
   * @param {number[]} numbers 
   * @return {boolean}
   */
  checkWin(numbers) {
    const result = this.#winNumbers.some((ary) => {
      return ary.every((value) => {
        return numbers.includes(value)
      })
    });

    if (result == true) {
      this.#isWin = true;
      return true;
    }
    return false;
  }

  /**
   * this.#isPlayerATurnの反転
   * this.#currentPlayerの変更
   */
  changePlayerTurn() {
    this.#isPlayerATurn = !this.#isPlayerATurn;
    if (this.#isPlayerATurn === true) {
      this.#currentPlayer = this.#playerA;
    } else {
      this.#currentPlayer = this.#playerB;
    }
  }

  /**
   * restart
   */
  restart() {
    this.#isWin = false;
    this.#currentPlayer = this.#playerA;
    this.#isPlayerATurn = true;
  }
}

export default Game;