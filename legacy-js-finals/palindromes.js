function palindrome(str) {
  let newStr = str.replace(/\W|_/g, '').toLowerCase();
  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] !== newStr[newStr.length - i - 1]) {
      return false;
    }
  }
  return true;
}
