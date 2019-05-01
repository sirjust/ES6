let p = new Promise((resolve, reject) => {
    //resolve("Resolved promise data");
    // reject("Rejected promise data");
    setTimeout(() => resolve("Resolved promise data"), 3000);
})

p.then(response => console.log(response))
.catch(error => console.log(error));
console.log('after promise completion');

export default p;