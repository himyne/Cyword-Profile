import { getElement } from "../../util.js";

const INFO_MESSAGE = {
  ask_winningNum: '로또 번호를 입력하세요',
  ask_bonusNum: '보너스 번호를 입력하세요',
  result: '당첨 결과입니다.'
}

const PRINT_MESSAGE = Object.freeze({
  purchaseAmount: (lottoCount) => `${lottoCount}개를 구매했습니다.\n\n`,
  winning_statistics: "당첨 통계\n------------\n",
  profit: (profit) => `------------\n총 수익률은\n${profit}%입니다.`,
});

const RANKING = {
  fifth: (fifth) => `5등 (5천원) - ${fifth}개\n`,
  fourth: (fourth) => `4등 (5만원) - ${fourth}개\n`,
  third: (third) => `3등 (150만원) - ${third}개\n`,
  second: (second) => `2등 (3천만원) - ${second}개\n`,
  first: (first) => `1등 (2억원) - ${first}개\n`,
};

const $result = getElement("lotto__result");
const $info = getElement("lotto__subtitle");
const $restart = getElement("lotto__restart");

export const OutputView = {
  printUserLotto(lottoCount, totalUserLotto) {
    $info.innerText = INFO_MESSAGE.ask_winningNum;
    $result.innerText += PRINT_MESSAGE.purchaseAmount(lottoCount);
    totalUserLotto.map((eachUserLotto) => {
      $result.innerText += `[${eachUserLotto.join(", ")}]\n`;
    });
  },

  printResult(prizeCount) {
    $info.innerText = INFO_MESSAGE.ask_bonusNum;
    $result.innerText = PRINT_MESSAGE.winning_statistics;
    const prizeCountList = Object.values(prizeCount);
    Object.values(RANKING).forEach((ranking, index) => {
      $result.innerText += ranking(prizeCountList[index]);
    });
  },

  printProfit(calculateProfit) {
    $info.innerText = INFO_MESSAGE.result;
    $result.innerText += PRINT_MESSAGE.profit(calculateProfit);
  },
};
