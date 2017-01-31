"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input  : process.stdin,
  output : process.stdout,
  prompt : 'Insert words: >'
});

function pig_latin_word(word){
  if(/[aiueo]/i.test(word[0]) === true){
    return word;
  }
  else {
    var consonant = /[^aiueo]+/i.test(word);
    var get_consonant = RegExp['$&']; //RegExp.lastMatch
    var convert = word.replace(get_consonant,"") + get_consonant + "ay";
    return convert;
  }
}

function pig_latin_sentence(words) {
  let arr_words = words.split(" ");
  var words = [];
  var total = 0
  for(var i=0; i<arr_words.length; i++) {
    if(/[aiueo]/i.test(arr_words[i][0]) === true) {
      words.push(arr_words[i])
    } else {
      words.push(pig_latin_word(arr_words[i]));
      total++
    }
  }
  console.log(words.join(" "));
  console.log("Total konversi:",total);
}
rl.prompt();
rl.on('line', (arr_words) => {

  if(arr_words.length === 1){
   console.log(pig_latin_word(arr_words[0]));
  }
  else{
    console.log(pig_latin_sentence(arr_words));
  }
rl.prompt();
}).on('close', () => {
  process.exit(0);
});

// pig_latin.question('Insert any word: ', (words) => {
  //   var arr_words = words.split(" ");
  //
  //   if(arr_words.length === 1){
  //    console.log(Pig_Latin_Words(words));
  //   }
  //   else{
  //     words = [];
  //     for(var i=0; i<arr_words.length; i++){
  //       words.push(Pig_Latin_Words(arr_words[i]));
  //     }
  //     console.log(words.join(" "));
  //   }
  //
  // pig_latin.close();
  // process.stdin.destroy();
//  });
