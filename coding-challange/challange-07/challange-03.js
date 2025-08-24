const Mark = {
    fullName:"Mark",
    mass:85,
    height:1.88,
    calcBmi:function(){
        this.bmiCal = this.mass/ this.height **2;
        return this.bmiCal;

    }
}


const Jhon = {
    fullName:"Jhon",
    mass:92,
    height:1.95,
    calcBmi:function(){
        this.bmiCal = this.mass/ this.height **2;
        return this.bmiCal;
    
    }
}
const BMIMark = Mark.calcBmi();
const BMIJhon = Jhon.calcBmi();

 if (BMIMark>BMIJhon){
    console.log(`MARK's BMI ${BMIMark}is heigher than JHONS BMI ${BMIJhon}`);
 }
else if (BMIJhon>BMIMark){
    console.log(`Jhons's BMI ${Jhon.calcBmi()}is heigher than marksS BMI ${Mark.calcBmi()}`);
}