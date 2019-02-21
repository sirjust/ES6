//variables();
templates();

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
