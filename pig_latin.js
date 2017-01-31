"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl       = readline.createInterface({
  input  : process.stdin,
  output : process.stdout
});

rl.setPrompt('Input your sentences: ');
rl.prompt();
rl.on("line", (words) => {
  if(words == "keluar") {
    rl.close();
  } else {
    console.log(sentences(words));
    rl.prompt();
  }
});

// TODO Log the answer in a database

function sentences(input) {
  var kalimat = input.split(" ");
  var hasil   = "";

  if(kalimat.length > 1) {
    for(var i = 0; i < kalimat.length; i++) {
      hasil = hasil + pigLatin(kalimat[i]) + " "
    }
  } else {
    return pigLatin(input);
  }
  return hasil
}

function pigLatin(words) {
  var result = [];
  var vowel  = words.toString().split("");
  var word   = vowel.join("");

  if(words[0] == "a" || words[0] == "i" || words[0] == "u" || words[0] == "e" || words[0] == "o") {

    return words;
  } else {
    for(var i = 0; i < vowel.length; i++) {
      if(vowel[i] == "a" || vowel[i] == "i" || vowel[i] == "u" || vowel[i] == "e" || vowel[i] == "o") {
        result.push(words.substr(i));
        result.push(words.substr(0,i));
        result.push("ay.");

        return result.join("");
      }
    }
  }
}
