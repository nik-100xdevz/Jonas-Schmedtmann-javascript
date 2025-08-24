//Function expression
const calcAge2=function (birthYear) {
    return 2037 - birthYear;
}
// Arrow function
// const calcAge3 = birthyear => 2037 -birthyear;
// calcAge3 = calcAge3(1991);
// console.log(age3);

const yearsUntilRetirement = (birthyear,firstName) =>{
    const age = 2037 - birthyear;
    const reatirement = 65 -age;
    // return reatirement
    return `${firstName} retires in ${reatirement} years`;
}
console.log(yearsUntilRetirement(2023,'nikhil'));
