import { findIntersection } from "../util.js";

export class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.fiveMatchLotto = [];
    this.matchedLottoNumber = [];
  }

  compareUserAndWinningNumber(totalUserLotto) {
    let intersection;
    totalUserLotto.forEach((eachUserLotto) => {
      intersection = findIntersection(
        new Set(eachUserLotto),
        new Set(this.#numbers)
      );
      if (intersection === 5) return this.fiveMatchLotto.push(eachUserLotto);
      return this.matchedLottoNumber.push(intersection)
    });
  }

  getFiveMatchLotto () {
    return this.fiveMatchLotto;
  }

  countPrizeCount(prizeCount) {
    this.matchedLottoNumber.forEach((number) => {
      switch (number) {
        case 6:
          prizeCount.first += 1;
          break;
        case 4:
          prizeCount.fourth += 1;
          break;
        case 3:
          prizeCount.fifth += 1;
          break;
      }
    });
  }
}
