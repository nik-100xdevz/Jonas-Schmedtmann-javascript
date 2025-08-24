const bill = 430;
const tip = bill >= 50 && bill <= 300 ? console.log(`The intitial bill was  ${bill} your tip  is 15% i.e-: ${bill*0.15} and your final bill is ${(bill*0.15)+bill}`) : console.log(`Your intial bill was ${bill} and YOur tip  is 20% i.e-: ${bill*0.20} and your final bill is ${(bill*0.20)+ bill }`);
