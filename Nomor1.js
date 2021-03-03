function isPalindrome(string) {
  let stringSize = getStringLength(string);
  let maxIteration = stringSize / 2;
  for (i = 0; i < maxIteration; i++) {
    if (string[i] !== string[stringSize - 1 - i]) {
      return "bukan palindrom";
    }
  }
  return "palindrom";
}
console.log(isPalindrome("malam"));

// buat fungsi untuk mendapatkan panjang dari string menggantikan
// build in method .length
function getStringLength(string) {
    let length = 0;
    for (let i in string) {
      length++;
    }
    return length;
  }

//   console.log(getStringLength("asd"))