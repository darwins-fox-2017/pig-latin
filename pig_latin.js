"use strict"

//use readline to fix this challenge
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'SCR> '
});

rl.prompt();

rl.on('line', (line) => {
  let word = `${line.trim()}`;
  let result = "";
  let consonant = ""

  if (word[0] === "a"  || word[0] === "i" || word[0] === "u" || word[0] === "e" || word[0] === "o" ) {
    result += word
  } else {
    for (var i=0; i<word.length; i++) {
      if (word[i] === `a`  || word[i] === `i` || word[i] === `u` || word[i] === `e` || word[i] === `o`) {
        result += word.substring(i, word.length);
        break;
      } else {
        consonant += word[i]
      }
    }
  }

  if (consonant.length >= 1) { console.log(result+consonant+"ay") } else { console.log(result) }

  rl.prompt();
}).on('close', () => {
  console.log('Terima Kasih')
  process.exit(0)
});
