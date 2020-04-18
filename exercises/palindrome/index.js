// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let isPalindrome = true;

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      isPalindrome = false;
    }
  }

  return isPalindrome;
}

// SOLUTION 4
// function palindrome(str) {
//   // unideal solution because it could be solved by looping just the first half of the array
//   return str
//     .split("")
//     .every((letter, index) => letter === str[str.length - index - 1]);
// }

//SOLUTION 3
// function palindrome(str) {
//   let reversed = "";
//   for (i in str) {
//     reversed = str[i] + reversed;
//   }
//   return reversed === str;
// }

//SOLUTION 2
// function palindrome(str) {
//   return (
//     str ===
//     str.split("").reduce((string, char) => {
//       return `${char}${string}`;
//     }, "")
//   );
// }

//SOLUTION 1
// function palindrome(str) {
//   return str === str.split("").reverse().join("");
// }

module.exports = palindrome;
