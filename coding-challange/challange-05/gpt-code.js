// Function to calculate the average score for a team
function avgScore(scores) {
    return scores.reduce((a, b) => a + b, 0) / scores.length;
}

// Function to calculate the average score of both teams combined
function avgBothTeams(avgDolphins, avgKoalas) {
    return (avgDolphins + avgKoalas) / 2;
}

// Function to determine the winner
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) {
        console.log(`Team Dolphins win by ${avgDolphins - avgKoalas} points!`);
    } else if (avgKoalas > avgDolphins) {
        console.log(`Team Koalas win by ${avgKoalas - avgDolphins} points!`);
    } else {
        console.log("It's a draw!");
    }
}

// Test scores for Dolphins and Koalas
const dolphinScores = [44, 23, 71];
const koalaScores = [65, 54, 49];

// Calculate average scores
const avgDolphins = avgScore(dolphinScores);
const avgKoalas = avgScore(koalaScores);

// Log average scores
console.log(`Average score for Dolphins: ${avgDolphins}`);
console.log(`Average score for Koalas: ${avgKoalas}`);

// Calculate the combined average score
const avgCombined = avgBothTeams(avgDolphins, avgKoalas);
console.log(`Combined average score: ${avgCombined}`);

// Check the winner
checkWinner(avgDolphins, avgKoalas);
