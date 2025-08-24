function cutFruitPieces (fruit){
    return fruit * 4;
}

function fruitProcessor(apples,oranges) {
    const applepieces = cutFruitPieces(apples);
    const orangespieces = cutFruitPieces(oranges);
//    console.log(apples, oranges);
    const juice =`juice with ${applepieces} pieces of apples and ${orangespieces} pieces of oranges.`;
    return juice;

}
 
console.log(fruitProcessor(2 ,3));

