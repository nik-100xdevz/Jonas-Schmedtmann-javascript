function avgScoreDolphin(scoreDolphins1,scoreDolphins2,scoreDolphins3){
   return (scoreDolphins1+scoreDolphins2+scoreDolphins3)/3
}
function avgScoreKoalas(scoreKoalas1,scoreKoalas2,scoreKoalas3){
   return (scoreKoalas1+scoreKoalas2+scoreKoalas3)/3
}

function avgBothteams(avgScoreDolphin,avgScoreKoalas){
    
    return (avgScoreDolphin+avgScoreKoalas)/2;
}
function checkWinner(avgScoreDolphin,avgScoreKoalas){
    if(avgScoreDolphin>avgScoreKoalas){
        console.log(`team dolphin wins by ${avgScoreKoalas-avgScoreDolphin} Points`);
        return checkWinner;
    } else if(avgScoreKoalas>avgScoreDolphin){
        console.log(`team koalas are winner`);
    return checkWinner;    
    }
}

// const avgScoreDolphin1 = 44;
// const avgScoreDolphin2 = 23;
// const avgScoreDolphin3 = 71;

// const avgScoreKoalas1 = 65;
// const avgScoreKoalas2 = 54;
// const avgScoreKoalas3 = 49;

console.log(avgScoreDolphin(44,23,71));
console.log(avgScoreKoalas(65,54,49));
console.log(avgBothteams(avgScoreDolphin,avgScoreKoalas));
console.log(checkWinner(avgScoreDolphin,avgScoreKoalas));

