const age = 18;
if (age === 18) {
    console.log("you just become 18 (strict)");
    
    
} if(age == 18) {
 console.log("you just become adult (loose)");
}

const favourite = prompt("Whtas your favourite number");
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23) {
    console.log("23 is amaxing number!");
    
} else if (favourite === 7) {
    console.log("7 is cool number");
    
} else {
    console.log("NU,mber is not 23 or 7");
    
}
//different operator

if(favourite !== 23) console.log("why not 23");