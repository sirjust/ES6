let myMap = new Map();
let key_1 = "string key";
let key_2 = { a: 'key'};
let key_3 = function() {};

myMap.set(key_1, 'return value for a string key');
myMap.set(key_2, 'return value for an object key');
myMap.set(key_3, 'return value for a function key');

let numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
let valMap = new Map(numArr);

let stringForMap = 'asdfupijlkwavxko;ipruewpaurhflkjfd';
let letterMap = new Map();
for(let i=0; i<stringForMap.length; i++){
    let letter = stringForMap[i];
    if(!letterMap.has(letter)){
        letterMap.set(letter, 1);
    } else {
        letterMap.set(letter, letterMap.get(letter) +1);
    }
}

export {myMap, valMap, letterMap};