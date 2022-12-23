const makeRandomNumber = () => {
  return Math.floor((Math.random()*9+1));
}

export const makeComputerNumber = () => {
  const computerAnswerNumber = [];
  while(computerAnswerNumber.length < 3){
    let randomNumber = makeRandomNumber();
    if (!computerAnswerNumber.includes(randomNumber)){
      computerAnswerNumber.push(randomNumber)
    } 
  }
  return computerAnswerNumber;
} 
