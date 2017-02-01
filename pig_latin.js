"use strict"

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Masukan kata : "

});

function pig_latin (input){
	var vowel = ['a','i','u','e','o'];
	var temp ;
	var tempt ;
	if(vowel.indexOf(input[0]) >= 0){
		return input;
	}
	else {
		var find = false;
		var j = 0;
		while(find == false ){
			if (vowel.includes(input[j]) === false){
				j++;
			}
			else{
				temp = j;
				find = true;
			}
		}
		temp = input.substring(0, j);
		tempt = input.substring(j, input.length);
		return `${tempt}${temp}.ay`
	}
}
rl.prompt();
rl.on('line',(answer) => {
  //console.log(pig_latin(answer));
  var arrAnswer = answer.split(' ');
	if(arrAnswer.length == 1){
		console.log(pig_latin(answer));
	}
	else{
		var tampung =[];
		for(var i=0; i< arrAnswer.length; i++){
			tampung.push(pig_latin(arrAnswer[i]));
		}
		console.log(tampung.join(' '));
	}
  rl.prompt();
}).on('close', function(){
  rl.close()
})
