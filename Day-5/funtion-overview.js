const calcAge = function (birthYear) {
  //birthyear is like local year
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthyear, firstName) {
  const age = calcAge(birthyear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};
// return retirement;
// return

console.log(yearsUntilRetirement(1999, "nikhil"));
console.log(yearsUntilRetirement(1950, "Shyam"));
