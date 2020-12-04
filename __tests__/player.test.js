import Player from "../src/js/Player";

describe("Player Class", () => {
  const playerA = new Player("○");
  const playerB = new Player("×");

  it("constructor & this.#icon", () => {
    expect(playerA.getIcon()).toBe("○");
    expect(playerB.getIcon()).toBe("×");
  })

  it("pushNumber & this.#numbers", () => {
    expect(playerA.getNumbers()).toStrictEqual([]);
    playerA.pushNumber(1);
    playerA.pushNumber("2");
    playerA.pushNumber(3);
    playerA.pushNumber("string");
    expect(playerA.getNumbers()).toStrictEqual([1, 2, 3]);
    expect(playerB.getNumbers()).toStrictEqual([]);
  })

  it("resetNumbers & this.#numbers", () => {
    expect(playerA.getNumbers()).toStrictEqual([1, 2, 3]);
    playerA.resetNumbers();
    expect(playerA.getNumbers()).toStrictEqual([]);
  })
})