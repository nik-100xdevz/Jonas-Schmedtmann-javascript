const mark = {
    fullName: "Mark",
    mass: 85,
    height: 1.88,
    calcBmi: function () {
        this.bmiCal = this.mass / this.height ** 2;
        return this.bmiCal;
    }
};

const jhon = {
    fullName: "Jhon",
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        this.bmiCal = this.mass / this.height ** 2;
        return this.bmiCal;
    }
};

// Calculate BMI for both
const BMIMark = mark.calcBmi();
const BMIJhon = jhon.calcBmi();

// Compare BMIs
if (BMIMark > BMIJhon) {
    console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is higher than Jhon's BMI (${BMIJhon.toFixed(2)})!`);
} else if (BMIJhon > BMIMark) {
    console.log(`Jhon's BMI (${BMIJhon.toFixed(2)}) is higher than Mark's BMI (${BMIMark.toFixed(2)})!`);
} else {
    console.log(`Mark and Jhon have the same BMI (${BMIMark.toFixed(2)})!`);
}
