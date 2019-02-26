//variables();
//templates();
//spreadOperator();
//restParameters();
//destructure();

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
