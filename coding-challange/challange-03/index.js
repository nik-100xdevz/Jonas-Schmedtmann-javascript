const teamDolphinsScore1 = 101;
const teamDolphinsScore2 = 112;
const teamDolphinsScore3 = 101;

const teamKoalasScore1 = 109;
const teamKoalasScore2 = 95;
const teamKoalasScore3 = 123;

const averageScoreDolphin = (teamDolphinsScore1*teamDolphinsScore2*teamDolphinsScore3) / 3;

const aveargeScoreKoalas =(teamKoalasScore1*teamKoalasScore2*teamKoalasScore3) / 3;

if (aveargeScoreKoalas === 100) {
    console.log("team koalas is qualified");
    
}  else {
    console.log("Your team team koalas is not qualified");
    
}
if (averageScoreDolphin ===100) {
    console.log("team dolphins is qualified");
} else {
    console.log("teamn dolphin is not qualified ");
    
}
if(aveargeScoreKoalas===averageScoreDolphin){
    console.log("you got draw both team");   
}
 if (aveargeScoreKoalas>averageScoreDolphin){
    console.log("team koalas are winner");
    
 } else if (averageScoreDolphin>averageScoreDolphin) {
    console.log("team Dolphin are winner");
    
    
 }
