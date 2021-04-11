//my sol
function validAnagram1(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    let str1FreqCounter = {};
    let str2FreqCounter = {};
    for (let char of str1){
        str1FreqCounter[char] = str1FreqCounter[char]? str1FreqCounter[char]+1 : 1;
    }
    for (let char of str2){
        str2FreqCounter[char] = str2FreqCounter[char]? str2FreqCounter[char]+1 : 1;
    }
    for(let key in str1FreqCounter){
        if(!(key in str2FreqCounter)){
            return false;
        }
        if((str1FreqCounter[key]!==str2FreqCounter[key])){
            return false;
        }
    }
    return true;
}
//course sol
function validAnagram2(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }

var readline = require("readline-sync");
let str1 = readline.question("enter-1");
let str2 = readline.question("enter-1");
// let t0 = performance.now();
// validAnagram1(str1, str2)
// let t1 = performance.now()
// console.log(t1-t0);
// t0 = performance.now();
// validAnagram2(str1, str2)
// t1 = performance.now()
// console.log(t1-t0);
console.log(validAnagram2(str1, str2));