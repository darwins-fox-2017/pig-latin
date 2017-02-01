function pig_latin(str) {

	let vowelWords = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

	if (vowelWords.indexOf(str[0]) >= 1) {
		return str;
	} else {
		var counterBesar = 0;
		for (var i = 0; i < str.length; i++) {
			if(vowelWords.indexOf(str[i]) >= 0) {
				counterBesar = i;
				break;
			}
		}
		var upStr = str.substr(0, counterBesar);
		var lowerStr = str.substr(counterBesar, str.length);

		return lowerStr + upStr + "ay.";
	}
}


//pig_latin2("Thank you"); // adiTay aleMay
//console.log(pig_latin("Thank")); // ankThay ouyay

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Masukkan Kata> '
});

rl.prompt();

rl.on('line', (line) => {
  let words = line.split(" ");
  let hasil = ""
  for(let i = 0 ; i < words.length; i ++){
  	hasil += pig_latin(words[i]) + " "
  }
  console.log(hasil);
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});