"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Masukan kata: ', (answer) => {
  // TODO: Log the answer in a database
  let answerArr = answer.split(" ");
  let answers = '';
  for(let j=0; j<answerArr.length; j++) {
    if (!(answer[j][0].toLowerCase() === 'a' || answer[j][0].toLowerCase() === 'e' || answer[j][0].toLowerCase() === 'i' || answer[j][0].toLowerCase() === 'u' || answer[0].toLowerCase() === 'o')) {
      for(let i=0; i<answerArr[j].length; i++) {
        if (answerArr[j][i].toLowerCase() === 'a' || answerArr[j][i].toLowerCase() === 'e' || answerArr[j][i].toLowerCase() === 'i' || answerArr[j][i].toLowerCase() === 'u' || answerArr[j][i].toLowerCase() === 'o') {
          answers += answerArr[j].substr(i) + answerArr[j].substr(0, i) + "ay. "
          break;
        }
      }
    }
  }

  console.log(`Thank you for your valuable feedback: \n${answers}`);

  rl.close();
});
