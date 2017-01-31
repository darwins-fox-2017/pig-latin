"use strict"
let vowel =['a','i','u','e','o'];
var regexvol=/[aiueo]/;
var regexNvol=/[^aioeo]+/g;
var word='makan apa';
var numkataDiganti;

function cekPigAnak(word) {
  var outputkata=''
  var sukukata1='';
  var sukukata2=''
  if (regexvol.test(word[0])) {
    outputkata=word;
  }else {
    sukukata1=word.match(regexNvol);
    sukukata1=sukukata1[0];
    var panjangSKata1=sukukata1.length;
    sukukata2=word.substring(panjangSKata1,word.length);
    outputkata=sukukata2+sukukata1+'ay.';
  }
  return outputkata;
}

function cekpig(word) {
word=word.split(' ');
var kalimatBaru='';
var wordChange=0;
for (var i = 0; i < word.length; i++) {
if (!regexvol.test(word[i][0])) {
  wordChange=wordChange+1;
}
kalimatBaru=kalimatBaru +' ' +cekPigAnak(word[i]) +'';
}
numkataDiganti=wordChange;
return kalimatBaru
}

//console.log(cekpig('kamu dimana apakah kamu sehat'));
//console.log(numkataDiganti);
//console.log(cekpig(word));

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
});

rl.prompt();

rl.on('line', (line) => {
var sentence=line;
var pigsentence=cekpig(sentence);
console.log(pigsentence);
console.log(numkataDiganti);

  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
