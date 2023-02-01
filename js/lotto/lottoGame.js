import { getElement, hideAndShowInput } from "../util.js";
import { LottoValidation } from "../Validation.js";
import { Bonus } from "./bonus.js";
import { Lotto } from "./lotto.js";
import { UserLotto } from "./userLotto.js";
import { OutputView } from "./View/outputView.js";

export class LottoInfo {
  constructor() {
    this.$submitBtn = getElement("lotto__submit");
    this.$amount = getElement("amount");
    this.$winningNumber = getElement("winning__number");
    this.$bonus = getElement("bonus");
    this.$result = getElement("lotto__result");
    this.$restart = getElement("lotto__restart");
    this.prizeCount = {fifth: 0, fourth: 0, third: 0, second: 0, first:0};
  }

  amountHandler() {
    this.$submitBtn.addEventListener("click", (e) => {
      e.preventDefault();

      if (this.winningNumber) {
        this.bonusNumberHandler();
        this.generateResult();
        this.restartHandler();
        return;
      }

      if (this.amount) {
        this.winningNumberHandler();
        return;
      }

      if (LottoValidation.userLotto(this.$amount.value)) {
        this.amount = this.$amount.value;
        this.userLotto = new UserLotto(this.amount);
        OutputView.printUserLotto(
          this.userLotto.getLottoCount(),
          this.userLotto.userLotto
        );
        hideAndShowInput(this.$amount, this.$winningNumber);
      }
    });
  }

  winningNumberHandler() {
    if(LottoValidation.winningNumber(this.$winningNumber.value)){
      this.winningNumber = this.$winningNumber.value.split(',').map(item => +item);
      this.winningLotto = new Lotto(this.winningNumber);
      this.winningLotto.compareUserAndWinningNumber(this.userLotto.userLotto);
      this.winningLotto.countPrizeCount(this.prizeCount);
      hideAndShowInput(this.$winningNumber, this.$bonus);
    }
  }

  bonusNumberHandler() {
    if(LottoValidation.bonusNumber(this.$bonus.value)){
      this.bonus = this.$bonus.value;
      this.bonusLotto = new Bonus(bonus);
      this.bonusLotto.checkBonusInLotto(this.winningNumber);
      this.bonusLotto.checkBonusInFiveMatchLotto(this.prizeCount, this.winningLotto.getFiveMatchLotto());
    }
  }

  generateResult() {
    OutputView.printResult(this.prizeCount);
    OutputView.printProfit(this.userLotto.calculateProfit(this.prizeCount))
  }
}

const lottoInfo = new LottoInfo();
lottoInfo.amountHandler();
