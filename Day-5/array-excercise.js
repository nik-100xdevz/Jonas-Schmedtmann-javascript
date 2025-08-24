const calcAge2=function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990,1967,2002,2010,2019];
const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years[years.length -1]);
console.log(age1, age2, age3);

const ages = [calcAge2(years[0]), calcAge2(years[1]),
calcAge2(years[years.length-1])];
console.log(ages);
console.log(typeof(years));

// const calcAgess=function (birthYear,) {
//     return 2037 - birthYear;
// }

// const personsAge = [2002,2003,2004];
// console.log(calcAgess(personsAge));