import { makeComputerNumber } from "./random.js";
import { Validation } from "./Validation.js";
import { getElement } from "./util.js";


export class Button {
  constructor() {
    this.$submitBtn = getElement("submit");
    this.$userNumber = getElement("userNumber");
    this.$result = getElement("result");
    this.$restart__button = getElement("restart__button");
    this.computerNumber = makeComputerNumber();
  }

  init(){
    this.$result.textContent = '';
    this.submitHandler();
  }

  submitHandler() {
    this.$submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.userNumber = this.$userNumber.value;
      if(Validation.userNumber(this.userNumber)) {
        this.compareUserAndComputer();
      };
    });
  }

  compareUserAndComputer() {
    const strike = this.countStrikeNumber();
    const ball = this.countBallNumber();
    this.printGameResult(strike, ball);
  }

  countBallNumber() {
    return this.computerNumber.filter(
      (number, index) =>
        this.userNumber.includes(number) && number != this.userNumber[index]
    ).length;
  }

  countStrikeNumber() {
    return this.computerNumber.filter(
      (number, index) => number == this.userNumber[index]
    ).length;
  }

  printGameResult(strike, ball) {
    if (strike === 3) {
      this.$result.textContent = "3스트라이크"
      return this.restart();
    }
    if (!strike && !ball) return this.$result.textContent = '낫싱';
    return this.$result.textContent =
      `${ball ? ball + '볼' : ''} ${
        strike ? strike + '스트라이크' : ''
      }`.trim();
  }
  
  restart(){
    this.$result.insertAdjacentHTML("beforeend", "<div> <br>정답입니다!🎉</div>");
    this.$restart__button.classList.remove("hidden");
    this.restartHandler();
  }

  restartHandler() {
    this.$restart__button.addEventListener('click', (e) => {
      e.preventDefault();

      this.computerNumber = makeComputerNumber();
      this.$restart__button.classList.add("hidden")
      this.init();
    })
  }
}

const button = new Button();
button.submitHandler();
