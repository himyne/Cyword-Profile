import { isOutOfRange } from "./util.js";

const THREE_DIGITS = 3;
const ONE_TO_NINE_REGEXP = /[^1-9]/g;
const THOUSAND_WON = 1000;
const ERROR = {
  three_digits: 3,
  not_three_digits: "3자리 숫자를 입력해주세요.",
  not_number: "숫자를 입력해주세요",
  duplicate: "중복된 숫자가 있습니다.",
  one_to_nine: "1에서 9까지의 숫자만 입력할 수 있습니다.",
  not_one_or_two: "1이나 2만 입력할 수 있습니다.",
  one_digit: "1과 2중 한 자리만 입력할 수 있습니다.",
};

const LOTTO_ERROR = {
  minimum_amount: 1000,
  not_number_amount: "1000원 단위의 숫자를 입력해주세요.",
  not_upper_one_thousand: "1000원 이상의 금액을 입력해주세요.",
  not_thousand_unit: "1000원 단위로 입력해주세요",
  not_six_digits: "로또 번호는 6개여야 합니다.",
  duplicate: "로또 번호에 중복된 숫자가 있습니다.",
  out_of_range_lotto: "로또 번호는 1부터 45까지의 숫자여야 합니다.",
  not_number_lotto: "로또 번호는 숫자여야 합니다.",
  not_number_bonus: "보너스 번호는 한 자리 숫자여야 합니다.",
  duplicate: "보너스 번호가 로또 번호와 중복됩니다.",
  out_of_range_bonus: "보너스 번호는 1~45까지의 숫자여야 합니다.",
};

export const Validation = {
  userNumber(input) {
    console.log(input);
    if (input.length !== THREE_DIGITS) return alert(ERROR.not_three_digits);
    if (isNaN(input)) return alert(ERROR.not_number);
    if (new Set([...input]).size !== THREE_DIGITS)
      return alert(ERROR.duplicate);
    if (ONE_TO_NINE_REGEXP.test(input)) return alert(ERROR.one_to_nine);

    return input;
  },
};

export const LottoValidation = {
  userLotto(amount) {
    if (isNaN(amount)) {
      alert(LOTTO_ERROR.not_number_amount);
      amount = false;
    } else if (amount < LOTTO_ERROR.minimum_amount) {
      alert(LOTTO_ERROR.not_upper_one_thousand);
      amount = false;
    } else if (amount % THOUSAND_WON !== 0) {
      alert(LOTTO_ERROR.not_thousand_unit);
      amount = false;
    }

    return amount;
  },

  winningNumber(numbers) {
    numbers = numbers.split(",");
    if (numbers.length !== 6) {
      alert(LOTTO_ERROR.not_six_digits);
      numbers = false;
    }
    if (new Set(numbers).size !== 6) {
      alert(LOTTO_ERROR.duplicate);
      numbers = false;
    }
    if (numbers.some((number) => isNaN(number))) {
      alert(LOTTO_ERROR.not_number_lotto);
      numbers = false;
    }
    if (numbers.some((number) => isOutOfRange(number))) {
      alert(LOTTO_ERROR.out_of_range_lotto);
      numbers = false;
    }
    return numbers;
  },

  bonusNumber(bonus) {
    if (isNaN(bonus)) {
      alert(LOTTO_ERROR.not_number_bonus);
      bonus = false;
    }
    if (isOutOfRange(bonus)) {
      alert(LOTTO_ERROR.out_of_range_bonus);
      bonus = false;
    }

    return bonus;
  },
};
