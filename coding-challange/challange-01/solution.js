const massMark =95;
const heightMark = 1.88;

const massJhon = 85;
const heightJhon = 1.95;
// const massMark =78;
// const heightMark = 1.69;

// const massJhon = 92;
// const heightJhon = 1.95;

const BMIMark = massMark / heightMark **2;
const BMIJhon = massJhon / heightJhon **2; 
const markHigherBMI = BMIMark>BMIJhon;

console.log(BMIJhon,BMIMark);
console.log(markHigherBMI);



