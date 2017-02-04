"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
});

rl.prompt();

rl.on('line', (line) => {
  console.log('output : ', complete_sentence(line));
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});


function pig_latin(kata) {
  var firstVowelPosition = '';

  for (var i = 0; i < kata.length; i++) {
    if(kata[i] != 'a' && kata[i] != 'i' && kata[i] != 'u' && kata[i] != 'e' && kata[i] != 'o') {

    } else {
      firstVowelPosition = i
      break;
    }
  }

  var pindah = kata.substring(firstVowelPosition, kata.length);
  var consonant = kata.substring(0, firstVowelPosition);
  var tambah = pindah+consonant+'ay';


  return tambah;
}

function complete_sentence(kalimat) {
  kalimat = kalimat.split(' ');
  var kalimatPenuh = '';
  for (var i=0; i<kalimat.length; i++) {
    kalimatPenuh += pig_latin(kalimat[i]) + ' ';
  }
  return kalimatPenuh;
}
