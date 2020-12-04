class Player {
  #numbers = [];
  #icon;

  constructor(icon) {
    this.#icon = icon;
  }

  /**
  * player.numbersの取得
  */
 getNumbers() {
   return this.#numbers;
 }


  /**
   * player.iconの取得
   */
  getIcon() {
    return this.#icon;
  }

  /**
   * player.numbersに数字を追加
   */
  pushNumber(number) {
    const value = Number(number);
    if (isNaN(value) == false) {
      this.#numbers.push(value);
    }
  }

  /**
   * player.#numbersの初期化
   */
  resetNumbers() {
    this.#numbers = [];
  }

}

export default Player;