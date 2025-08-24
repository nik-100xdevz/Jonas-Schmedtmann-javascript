// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// problem 
/* We work for a  company  building a smart home
thermometer . Our most recent task is this : "Given an 
array of temprature of one day , claculate the temprature amplitude
Keep in the mind that sometime there might be a sensor error"
*/
const tempratures = [3, -2,-6,-1, 'error', 9, 13,17,15,14,9,5];

// understand the problem 
// what is temp apmlitude Answer : difference between highest and lowest temp in arraay
// - How to Compute max and min temprature ?
//- Whats a sensor error ? and what to do?

// Breaking problem into sub problems
// How to ignore the errors
// find max value into temp array
// find min value into temp array 
// Subtract min from max(amplitude) and return it

                                                                                                                                                                                                                                                                                                                         

const amplitude=culcTempAmplitude(tempratures);
console.log(amplitude);

/*  Problem 2 
> Function should now receieve 2 arrayas  of temp
>1) Understanding the problem 
- with 2 arrays, should we implement functionalty
twice NO! Just merge two arrays

2) Breaking up into sub-problem s
- merge 2 arrays

*/
