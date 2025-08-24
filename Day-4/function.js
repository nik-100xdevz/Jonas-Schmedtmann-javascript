//function declaration
// we can access the function before the declaration 


function calcAge(birthYear) {
    return  2037 - birthYear;
}
const age1=calcAge(2003);

console.log(age1);

//Function expression
const calcAge2=function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(2003);
console.log(age1, age2);
 