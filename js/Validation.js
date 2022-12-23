const THREE_DIGITS = 3;
const ONE_TO_NINE_REGEXP = /[^1-9]/g

const ERROR = {
  three_digits: 3,
  not_three_digits: "3자리 숫자를 입력해주세요.",
  not_number: "숫자를 입력해주세요",
  duplicate: "중복된 숫자가 있습니다.",
  one_to_nine: "1에서 9까지의 숫자만 입력할 수 있습니다.",
  not_one_or_two: "1이나 2만 입력할 수 있습니다.",
  one_digit: "1과 2중 한 자리만 입력할 수 있습니다.",
};

export const Validation = {
  userNumber(input) {
    console.log(input)
    if (input.length !== THREE_DIGITS) return alert(ERROR.not_three_digits)
    if (isNaN(input)) return alert(ERROR.not_number);
    if (new Set([...input]).size !== THREE_DIGITS) return alert(ERROR.duplicate);
    if (ONE_TO_NINE_REGEXP.test(input)) return alert(ERROR.one_to_nine)

    return input;
  },
  
};