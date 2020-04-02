// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //solution 1
  // return str
  //   .split("")
  //   .reverse()
  //   .join("");

  //solution 2
  let reversed = ""; //create empty array called reversed

  for (i in str) {
    //for each character, add it to the start of the reversed array
    reversed = str[i] + reversed;
  }

  return reversed; //return reversed variable
}

module.exports = reverse;
