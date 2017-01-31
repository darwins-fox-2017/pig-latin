"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout,
  prompt : 'Insert any sentences/word > '
});

function pigLatin(word){

  if(/[aiueo]/i.test(word[0])){
    return word
  }else {
    var consonant = word.match(/[^aiueo]+/i).join()
    var restWord = word.replace(consonant,"")
    return `${restWord}${consonant}ay.`
  }
}


rl.prompt();

rl.on('line', (line) => {
  line = line.trim().split(" ")

  if(line.length == 1){
    console.log(pigLatin(line[0]));
  }
  else{
    var result = []
    for(var i=0; i<line.length; i++){
      result.push(pigLatin(line[i]))
    }
    console.log(result.join(" "));
  }

  rl.prompt();
}).on('close', () => {
  process.exit(0);
})
