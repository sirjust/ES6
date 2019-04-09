let a = new Set();
a.add(5);
a.add(43);
a.add("Woohoo!");
a.add({x: 50, y: 200});

let numbers = [5,7,8,13,17];
let numSet = new Set(numbers);

let chars = 'awoipejfdalkvjuiaerfhkdjljfdais';
let chars_arr = chars.split("");
// turning it into a set removes duplicate values
let chars_set = new Set(chars_arr);

export {a, numSet, chars_set};