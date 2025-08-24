const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = ( 88 + 91+ 110 ) / 3;
console.log(scoreDolphins,scoreKoalas);

if(scoreDolphins>scoreKoalas){
    console.log('Dolphins win the trophy');
    
}else if ( scoreKoalas>scoreDolphins){
    console.log('koalas win the trophy');
    
}else if (scoreDolphins === scoreKoalas) {
    console.log('Both wins the trophy');  
}
//Bonus-1

const scoreDolphins1 = (96 + 108 + 89) / 3;
const scoreKoalas1 = ( 88 + 91+ 60 ) / 3;
console.log(scoreDolphins1,scoreKoalas1);

if (scoreDolphins1 > scoreKoalas1 && scoreDolphins1 >= 100) {
    console.log('Dolphins win the trophy');
} else if(scoreKoalas1 > scoreDolphins1 && scoreKoalas1 >= 100) {
    console.log('koalas win the trophy');
} else if (scoreDolphins1 === scoreKoalas1 && scoreDolphins1 >= 100 && scoreKoalas1 >= 100) {
    console.log('Both wins the trophy');  
} else {
    console.log("Nobody won the trophy");
    
}