import {fellowship, total } from './fellowship';
import {add, multiply} from './math';
// importing only the default means we won't have the addThree function but can forego the curly braces
import multiplyBy3 from './otherMath';
import Animal from './animals';
import Calculator from './calculator';
import {a, numSet, chars_set} from './set';
import {myMap, valMap, letterMap} from './Map';
import {call} from './closures';
import {addSuffix, product} from './moreClosures';
import {budget} from './budget';
// we shouldn't export generators
import p from './promises.js';

//variables();
//templates();
//spreadOperator();
//restParameters();
//destructure();
//arrowFunctions();
//arrowFunctions2();
//stringHelperMethods();
//numberHelperMethods();
//modules();
//useAnimals();
//extendAnimal();
//useCalculator();
//instantiateWizard();
//useSet();
//useMap();
//useClosures();
//useMoreClosures();
//useBudget();
usePromise();

function usePromise(){
    console.log(p);
}

function useBudget() {
    let wallet = budget();
    console.log(wallet);
    wallet.deposit20();
    console.log(wallet.check());
    // console.log(wallet.balance); this value is undefined because we don't return the balance, only an object
    wallet.withdraw20();
    wallet.deposit20();
    wallet.deposit20();
    console.log(wallet.check());
}

function useMoreClosures() {
    let add_ness = addSuffix('ness');
    console.log(add_ness);
    let h = add_ness("happi");
    console.log(h);

    let add_full = addSuffix("ful");
    let f = add_full("fruit");
    console.log(f);

    let mult5 = product(5);
    console.log(mult5(3));

    let double = product(2);
    console.log(double(9));
}

function useClosures() {
    //console.log(secret); // we expect an error since secret is not defined in the global scope
    let unveil = call();
    // due to lexical scoping, the call method retains a reference to the variable within it that can still be accessed after it completes
    unveil();
}

function useMap(){
    //console.log(myMap);
    //console.log(valMap);
    for(let [key, value] of valMap.entries()){
        //console.log(`${key} points to ${value}`);
    }
    
    console.log(letterMap);
}

function useSet(){
    console.log(a);
    console.log(a.size);
    console.log(a.has(5));
    console.log(a.has(7));

    console.log(numSet);
    // console.log(numSet.values); // this doesn't do anything
    for (let element of numSet.values()){
        console.log(element);
    }
    console.log(chars_set);
}

function Wizard(name, house, pet) {
    this.name = name;
    this.house = house;
    this.pet = pet;
    this.greet = () => `I'm ${this.name} from ${this.house}.`;
}

function instantiateWizard(){
    Wizard.prototype.pet_name;
    Wizard.prototype.info = function() {return `I have a ${this.pet} named ${this.pet_name}.`;}
    let Harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
    Harry.pet_name = "Hedwig";
    //console.log(Harry);
    //console.log(Harry.greet());
    console.log(Harry.info());
}

function useCalculator() {
    let a = Calculator.multiply(5,7);
    let b = Calculator.add(5,7);
    console.log(a, b);
}

function extendAnimal() {
    class Lion extends Animal {
        constructor(name, height, color){
            super(name, height);
            this.color = color;
        }
        hello() {
            console.log(`Hi! I'm ${this.name} from Pride Rock!`);
        }
    }

    let son = new Lion("Simba", 2, "golden");
    son.hello();
}

function useAnimals() {
    let king = new Animal('Mufasa', 4.5);
    console.log(king);
    king.hello();
}

function modules(){
    console.log(fellowship, total);
    console.log(add(5,10));
    console.log(multiply(5,10));
    console.log(multiplyBy3(20));
}

function numberHelperMethods(){
    // the isFinite method helps with data validation
    const addToCart = (item, number) => {
        return Number.isFinite(number);
    }
    console.log(addToCart('shirt', 5));
    console.log(addToCart('shirt', Infinity));
    console.log(addToCart('shirt', Math.pow(2,54)));

    // ES6 also allows us to check whether the integer is in a safe range
    const addSafeToCart = (item, number) => {
        return Number.isSafeInteger(number);
    }
    console.log(addSafeToCart('hat', Math.pow(2,54)));

}

function stringHelperMethods(){
    // strings have a .repeat function
    let b = "wooh " + "oo".repeat(50);
    console.log(b);

    // we can .repeat() empty strings
    let c = "wooh" + " ".repeat(50) + "oo";
    console.log(c);

    // it also works for template strings
    let d = `WOOH${"OO".repeat(50)}`;
    console.log(d);

    // startsWith and endsWith return boolean values
    let e = "butterfly";
    console.log(e.startsWith("butter"));
    console.log(e.startsWith("fly"));
    console.log(e.endsWith("fly"));
    // includes does the same
    console.log(e.includes("butter"));
    console.log(e.includes("fly"));
    console.log(e.includes("caterpillar"));
}

function arrowFunctions2() {
    let values = [20,30,40];
    let doubleValues = values.map(value => value*2);
    console.log(doubleValues);

    // old way
    let triple = (n) => {
        return n*3;
    }
    let tripled = values.map(triple);
    console.log(tripled);

    let points = [7,16,21,4,3,22,5];
    // we want point totals that are over 15
    // let highScores = points.filter((n) => {
    //     return n>15;
    let moreEfficientFilter = points.filter((score)=>score>15);
    //console.log(highScores);
    console.log(moreEfficientFilter);
    let noParentheses = points.filter(score => score > 15);
    console.log(noParentheses);
}

function arrowFunctions(){
    cheer();
    // this is a function declaration, therefore the function is not anonymous
    function cheer() {
        console.log("Woohoo!");
    }
    // to make it anonymous, we will declare a cheer variable and set it to a function with the same behavior
    // this is an anonymous function declaration
    var cheer2 = function(){
        console.log("WOOHOO!");
    }
    cheer2();

    setTimeout(function(){
        console.log("Woohoo!");
    }, 3000);

    setTimeout(() => {
        console.log("Woohoo!");
    }, 5000);

    // even though this is declared and called after the others, since they are callback functions this will run first since
    // all pending javascript needs to run before the callback happens
    let cheer3 = () => {
        console.log("Woohoo for the last time.");
    };
    cheer3();
}

function destructure() {
    let z = [4,5,6];
    //extract these numbers into separate variables
    let [four, five] = z;

    // this is the old way
    // let four = z[0];
    // let five = z[1];
    console.log(four, five);

    let animals = ['Simba', 'Zazu', 'Ed'];
    let [lion, bird] = animals;
    console.log(lion, bird);

    let king = {name: 'Mufasa', kids: 1};
    // this is the old way
    // let name = king.name;
    // let kids = king.kids;

    let {name, kids} = king;
    console.log(name, kids);

    let son = {sonName: 'Simba', parents: 2};
    let sonName, parents;
    // be careful of assigning first.. in order to make it work we need parentheses on the destructure line
    ({sonName, parents} = son);
    console.log(sonName, parents);
}

function restParameters(){
    function collect(...a){
        console.log(a);
    }
    collect(1,2,3,4,5);
    collect(3,6,9,12,15);
}

function spreadOperator(){
    let a = [20,30,40];
    let b = [10,...a,50];
    let c = ['Dana', 'Eric', 'Frank'];
    let d = ['Alice', 'Bob', 'Carl', ...c];
    console.log(b, d);
}

function variables() {
    const limit = 200;
    // limit = 100; const is read-only
    console.log(limit);
    
    const emails = ['frodo@email.com', 'samwise@email.com', 'merry@email.com'];
    console.log(emails);
    
    // emails = []; const is read-only
    // we can still manipulate an array by using the push method
    emails.push('pippin@email.com');
    console.log(emails);
    
    {
        // local scope ignores global scope
        let limit = 10;
        console.log('backstage limit ' + limit);
    }
    
    // example of block scoping with same variables
    function hello() {
        let message = "Hello";
        console.log(message);
    }
    
    function greeting() {
        let message = "How are you?";
        console.log(message);
    }
    hello();
    greeting();
}

function templates(){
    let a = `good`;
    let greeting = `${a} morning`;
    console.log(greeting);

    let b = `birthday`;
    let c = `Happy ${b}`;
    console.log(c);

}
