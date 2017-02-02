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
    let arrWord = line.split(' ');
    let sentence = [];
    let countPig =  0;

    for (var i = 0; i < arrWord.length; i++) {
      let word = arrWord[i];
      let result = "";
      let consonant = ""
        if (word[0] === "a"  || word[0] === "i" || word[0] === "u" || word[0] === "e" || word[0] === "o" ) {
          result += word
        } else {
          for (var j=0; j<word.length; j++) {
            if (word[j] === "a"  || word[j] === "i" || word[j] === "u" || word[j] === "e" || word[j] === "o") {
              result += word.substring(j, word.length);
              break;
            } else {
              consonant += word[i]
            }
          }
        }
        if (consonant.length >= 1) {
          sentence.push(result+consonant+"ay")
          countPig++
        } else {
          sentence.push(result)
        }
    }

    console.log(sentence.join(" "))
    console.log(countPig)
  rl.prompt();
}).on('close', () => {
  console.log('Terima Kasih')
  process.exit(0)
});
