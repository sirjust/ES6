const budget = () => {
    let balance = 0;
    let changeBal = (val) => {
        return balance += val;
    }
    // we will use closures within the scope of the function to manipulate its lexical scope
    const deposit20 = () => changeBal(20);
    const check = () => balance;
    const withdraw20 = () => changeBal(-20);

    // when key value pairs are the same in ES6 we don't need the colons
    return { deposit20: deposit20, check, withdraw20 }
}

export {budget};