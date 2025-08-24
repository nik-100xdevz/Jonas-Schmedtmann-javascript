const calcAvg = (a,b,c) => (a+b+c) / 3;
console.log(calcAvg(3,4,5));
//Test-1
const scoreDolphins = calcAvg(44,23,71);
const scoreKoalas = calcAvg(65,54,49);
console.log(scoreDolphins,scoreKoalas);

const checkWinner = function(avgDolphins,avgKoalas){

    if (avgDolphins>= 2*avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
        
    }
   else if (avgKoalas>= 2*avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
        
    } else {
        console.log(`No teams wins`);
        
    }
}
checkWinner(scoreDolphins,scoreKoalas);
checkWinner(574,111);//its independent function