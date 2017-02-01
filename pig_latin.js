"use strict"

// use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
});

rl.prompt();

rl.on('line', (line) => {
  console.log('output : ', pig_latin(line));
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});


function kata(input){
  input = input.toLowerCase().split("")
  var temp1 = [];
  var temp2 = [];

  if (input[0] === 'a' || input[0] === 'i' || input[0] === 'u' || input[0] === 'e' || input[0] === 'o'){
    var finalresult2 = input.join('')
    temp1.push(finalresult2)
    return temp1.toString()
  }
  if (input[0] !== 'a' || input[0] !== 'i' || input[0] !== 'u' || input[0] !== 'e' || input[0] !== 'o'){
    //return "not vowel"
    let temp = input[0]
    input.splice(0,1);
    var finalresult1 = input.join('')+temp+'ay.';
    temp2.push(finalresult1)
    return temp2.toString()
  }
}

function pig_latin(kalimat){
  kalimat = kalimat.split(" ")
  var res=[];
  for(var i=0; i<kalimat.length;i++){
    res.push(kata(kalimat[i]));
  }
  return res.join(" ");
  }
