function convertToRoman(num) {
  let numerals = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  let numbers = [1000, 500, 100, 50, 10, 5, 1];
  let runningNum = num;
  let numeral = '';
  for (let i = 0; i < 7 && 0 < runningNum; null) {
    if (runningNum >= numbers[i]) {
      runningNum -= numbers[i];
      numeral += numerals[i];
    } else if (runningNum + numbers[i + 2 - (i % 2)] >= numbers[i]) {
      runningNum -= (numbers[i] - numbers[i + 2 - (i % 2)]);
      numeral += numerals[i + 2 - (i % 2)] + numerals[i];
    } else {
      i++;
    }
  }
  return numeral;
}
