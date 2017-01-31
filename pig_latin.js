"use strict"

function pig_latin(words) {
  let vowel = ["a","i","u","e","o"];
  let words_split = words.split("");
  let container = "";
  let container_vowel = "";
  let container_non_vowel = "";

  if (words[0] != "a" && words[0] != "i" && words[0] != "u" && words[0] != "e" && words[0] != "o") {
    container_non_vowel += "-";
  }
  /*
  Note:
  jika huruf pertama dari words bukan huruf vokal, maka tambahkan tanda '-' ke variabel container_non_vowel;
  */

  while (words_split.length > 0) {
    if (words_split[0] == "a" || words_split[0] == "i" || words_split[0] == "u" || words_split[0] == "e" || words_split[0] == "o") {
      container = words_split.join("");
      words_split = [];
    }
    else {
      container_non_vowel += words_split[0];
    }
    words_split.shift();
  }
  /*
  Note:
  lakukan looping dengan while sampai words_split == 0 (isi array sudah kosong)

  kondisi ke 1 (huruf pertama mengandung huruf vokal)
    jika huruf pertama dari var words_split adalah huruf vokal, maka semua huruf di var words_split di gabung jadi 1 (join),
    lalu disimpan ke dalam variabel container.
    words_split di buat menjadi array kosong lagi, agar kondisi while menjadi false

  kondisi ke 2 (huruf pertama bukan huruf vokal)
    jika huruf pertama bukan huruf vokal, maka ambil huruf pertama tersebut lalu simpan ke variabel container_non_vowel

  potong setiap huruf di depan (shift)
  */

  if (words[0] != "a" && words[0] != "i" && words[0] != "u" && words[0] != "e" && words[0] != "o") {
    container_non_vowel += "ay";
  }
  /*
  Note:
  jika huruf pertama dari words bukan huruf vokal, maka tambahkan kata 'ay' ke variabel container_non_vowel;
  */

  //console.log(`${container}${container_non_vowel}`);
  return container +  container_non_vowel;
}
function complete_stence(words) {
  var result = [];
  if ( words.split(" ").length > 1 ) {
    var arr = words.split(" ");
    // kode 2 kata masuk disini
    for (var i = 0; i < arr.length; i++) {
      result.push(pig_latin(arr[i]));
    }
    result = result.join(' ')
    console.log(result);

  } else {
    console.log(pig_latin(words));;
  }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Masukkan kata> '
});

rl.prompt();

rl.on('line', (line) => {
  complete_stence(line);
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
