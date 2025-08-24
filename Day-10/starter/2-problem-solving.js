/*  Problem 2 
> Function should now receieve 2 arrayas  of temp
>1) Understanding the problem 
- with 2 arrays, should we implement functionalty
twice NO! Just merge two arrays

2) Breaking up into sub-problem s
- merge 2 arrays
*/
const culcTempAmplitudeNew = function(t1,t2) {

    
const temps = t1.concat(t2);

    let max = temps[0];
    let min = temps[0];
    for(let i =0; i< temps.length;i++){
        const currentTemp = temps[i];
        if (typeof currentTemp !== 'number') continue;
        if ( currentTemp > max) max = currentTemp;
        if (currentTemp < min ) min = currentTemp;
    }
    console.log(max);   
    console.log(min);
    return max-min;
};
const amplitudeNew = culcTempAmplitudeNew([1,2,3],[4,5,7]);
console.log(amplitudeNew);


