function rot13(str) {
  let list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      if (list.indexOf(str[i]) > 12) {
        newStr += list[list.indexOf(str[i]) - 13];
      } else {
        newStr += list[list.indexOf(str[i]) + 13];
      }
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(rot13('SERR PBQR PNZC'));
