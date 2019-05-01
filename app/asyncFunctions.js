async function async_one(){
    return "one";
}

async function async_two(){
    throw new Error("Issue with async!");
}
async function async_twoPointFive(){
    return "two";
}

async function async_three(){
    const one = await async_one();
    console.log(one);
    const two = await async_twoPointFive();
    console.log(two);
}

async function async_four(){
    const [res_one, res_two] = await Promise.all(
        [async_one(), async_twoPointFive()]
    )
    console.log(res_one, res_two);
}

export {async_one, async_two, async_twoPointFive, async_three, async_four}