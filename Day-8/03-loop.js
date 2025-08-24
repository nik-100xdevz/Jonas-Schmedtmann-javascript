
const nikArray =[
    'nikhil',
    'rai',
    '21',
    'student',
    ['raj','suraj','om'],
    true
];

const years = [1991 ,1999,2004,1969,2020];
const ages =[];
 for(let i = 0; i < years.length; i++){
    ages.push (2037-years[i]);
 }
console.log(ages);
// continue and break
console.log('---only strings---');
for (let i =0; i < nikArray.length;i++) {
    if (typeof nikArray[i]  !== 'string') continue;


    console.log(nikArray[i], typeof nikArray[i]); 
}


console.log('---BREAK WITH NUMBER---');
for (let i =0; i < nikArray.length;i++) {
    if (typeof nikArray[i]  == 'number') break;


    console.log(nikArray[i], typeof nikArray[i]); 
}