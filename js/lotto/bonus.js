import { findIntersection } from "../util.js";

export class Bonus {
  #bonus;

  constructor(bonus) {
    this.#bonus = bonus;
  }

  checkBonusInLotto (winningLotto) {
    if(winningLotto.includes(this.#bonus)) alert(ERROR.duplicate);
  }

  checkBonusInFiveMatchLotto(prizeCount, fiveMatchLotto) {
    fiveMatchLotto.forEach((eachUserLotto) => {
      if (eachUserLotto.includes(this.#bonus)) {
        return (prizeCount.second += 1);
      }
      return (prizeCount.third += 1);
    });
  }
}