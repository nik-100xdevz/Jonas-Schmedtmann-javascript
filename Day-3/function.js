function logger() {
 console.log(`my name is jonas`);
}

logger();// calling or running or invoking a function
function fruitProcessor(apples,oranges) {
    console.log(apples, oranges);
    const juice =`juice with${apples} apples and ${oranges}oranges.`;
    return juice;

}

const applejuice = fruitProcessor(5,0);
console.log(applejuice);
console.log(applejuice);
