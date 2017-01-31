"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl  = readline.createInterface({
  input : process.stdin,
  output: process.stout,
  prompt : 'Alo >'
})

rl.prompt();

function isVowel(char) {

  switch (char.toLowerCase()) {
    case 'a':
      return true
      break;
    case 'i':
      return true
      break;
    case 'u':
      return true
      break;
    case 'e':
      return true
      break;
    case 'o':
      return true
      break;
    default:
      return false
  }
}

function getIndexFirstVowel(line){
  for (var i = 0; i < line.length; i++) {
    if (isVowel(line[i])) {
      return i
    }
  }
}
rl.on('line', (line) => {
  var arrLine = line.split(' ')
  var res = []
  var convertedCount = 0;
  for (var i = 0; i < arrLine.length; i++) {
    if (isVowel(arrLine[i][0])) {
      res.push(arrLine[i])
    } else {
      var indexFirstVowel = getIndexFirstVowel(arrLine[i])
      var firstWord = arrLine[i].substring(indexFirstVowel, arrLine[i].length)
      var consonantsBeforeFirstVowel = arrLine[i].substring(0, indexFirstVowel)
      res.push(firstWord.concat(consonantsBeforeFirstVowel) + 'ay.')
      convertedCount += 1
    }
  }
  console.log(res.join(''))
  console.log('converted count : ' + convertedCount);

  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
