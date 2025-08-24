const nikArray = [
    'nikhil',
    'rai',
    '21',
    'student',
    ['raj','suraj','om'],
    true
];
const types =[];

//console.log(nikArray[0]);


for (let i =0; i < nikArray.length;i++) {
    // reading from nikArray 
    
    console.log(nikArray[i], typeof nikArray[i]);
//filling the types array
    // types[i] = typeof nikArray[i];
    types.push(typeof nikArray[i]); 
}

