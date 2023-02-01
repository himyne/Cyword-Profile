import { getSortedSixRandomNumber } from "../util.js";
const THOUSAND_WON = 1000;
const PRIZE_MONEY = [5000, 50000, 1500000, 30000000, 2000000000];

export class UserLotto {
  #lottoAmount;

  constructor(amount) {
    this.#lottoAmount = amount;
    this.totalUserLotto = this.publishLotto();
  }

  getLottoCount() {
    return this.#lottoAmount / THOUSAND_WON;
  }

  publishLotto() {
    const lottoCount = this.getLottoCount();
    const totalUserLotto = [];

    for (let i = 0; i < lottoCount; i++) {
      totalUserLotto[i] = getSortedSixRandomNumber();
    }

    return totalUserLotto;
  }

  get userLotto() {
    return this.totalUserLotto;
  }

  calculateProfit(prizeCount) {
    const outputMoney = Object.values(prizeCount).reduce(
      (accumulator, currentValue, index) =>
        currentValue * PRIZE_MONEY[index] + accumulator,
      0
    );
    return ((outputMoney / this.#lottoAmount) * 100).toFixed(1);
  }
}
