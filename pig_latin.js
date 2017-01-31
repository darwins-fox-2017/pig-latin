"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pig_latin(text){
  var vowel = ["a","i","u","e","o"]
  var firstLetter = text.slice(0,1)
  var isVowel = false
  var i = 0
  while((i<vowel.length)){
    if (firstLetter == vowel[i]){isVowel = true}
    i++
  }
  if(isVowel == false){
    var hasil = text.slice(1,text.length)+firstLetter+"ay."
  } else {
    hasil = text
  }
  return hasil
}


function pig_latin_sentences(text){
  var arr = text.split(" ")
  var hasil =""
  for(var i=0; i<arr.length; i++){
    hasil += pig_latin(arr[i]) + " "
  }
  return hasil
}
  rl.prompt()
  rl.on('line', (input) => {
  console.log(`Detected to convert to pig latin : ${input}`);
  console.log("Pig latin words: " + pig_latin_sentences(input));
});
