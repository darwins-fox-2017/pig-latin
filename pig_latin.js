"use strict"

//use readline to fix this challenge
const readline = require('readline');

let convertPigLatin = (word) => {
    let vowel = ['A','I','U','E','O','a','i','u','e','o'];
    let splitWord = word.split('');
    for(let i=0;i<splitWord.length;i++) {
        if(i === 0 && vowel.indexOf(splitWord[i]) > -1) {
            return word;
        } else if (vowel.indexOf(splitWord[i]) > -1) {
            let concatConsonant = word.substring(0, i); //t hank =>   
            splitWord.splice(0, concatConsonant.length);
            splitWord.splice(word.length-1, 0, concatConsonant); 
            return splitWord.join('')+'ay';
        }
    }
}

let convertSentencePigLatin = (sentence) => {
    let splitSpaceInput = sentence.split(' ');
    let result = '';
    let wordConvertedCount = 0;
    for(let i=0;i<splitSpaceInput.length;i++) {
       result += (convertPigLatin(splitSpaceInput[i])+' '); 
    }
    return result+'\n'+splitSpaceInput.length+' words converted';
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Hallo User, kata apa yang akan anda jadikan pig latin hari ini? '
});

rl.prompt();

rl.on('line', (input) => {
    console.log(convertSentencePigLatin(input));   
});
