// this code didn't compile, people are saying Babel doesn't support it, perhaps because the course is being shown on a Mac?
function* letterMaker() {
    yield 'a';
    yield 'b';
    yield 'c';
}
let letterGen = letterMaker();
console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);
// the next log should return undefined because we have reached the limit of our yields
console.log(letterGen.next().value);
// I skipped the rest of the videos on generators because it wouldn't compile