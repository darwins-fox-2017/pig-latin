"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Masukan kata: ', (answer) => {
  // TODO: Log the answer in a database
  // let answer = answer.split(" ");
  if (!(answer[0].toLowerCase() === 'a' || answer[0].toLowerCase() === 'e' || answer[0].toLowerCase() === 'i' || answer[0].toLowerCase() === 'u' || answer[0].toLowerCase() === 'o')) {
    for(let i=0; i<answer.length; i++) {
      if (answer[i].toLowerCase() === 'a' || answer[i].toLowerCase() === 'e' || answer[i].toLowerCase() === 'i' || answer[i].toLowerCase() === 'u' || answer[i].toLowerCase() === 'o') {
        answer = answer.substr(i) + answer.substr(0, i) + "ay."
        break;
      }
    }
  }
  console.log(`Thank you for your valuable feedback: \n${answer}`);

  rl.close();
});
