export const getElement = (id) => {
  let element = document.getElementById(id);
  return element;
};

export const hideAndShowInput = (hideElement, showElement) => {
  hideElement.classList.add("hidden");
  showElement.classList.remove("hidden");
  showElement.classList.add("textbox");
};

export const getSortedSixRandomNumber = () => {
  return pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
};

export const isOutOfRange = (number) => {
  return number < 1 || number > 45;
};

export const findIntersection = (setA, setB) => {
  return new Set([...setA].filter((item) => setB.has(item))).size;
};

function pickUniqueNumbersInRange(startInclusive, endInclusive, count) {

  const result = [];

  for (let i = startInclusive; i <= endInclusive; i++) {
    result.push(i);
  }

  return shuffle(result).slice(0, count);
}

function shuffle(array){
  return array.sort(() => Math.random() - 0.5);
}