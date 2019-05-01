const addSuffix = (x) => {
    const concat = (y) => {
        return y + x;
    }
    return concat;
}

const verboseProduct = (a) => {
    return b => {
        return a*b;
    }
}

const product = a => b => a*b;

export {addSuffix, product};