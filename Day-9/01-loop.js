// looping backwards and loop in loop
const nik =[
    'nikhil',
    'rai',
    '21',
    'student',
    ['raj','suraj','om'],
    true
];

// 4,3....,0

for(let i = nik.length - 1; i >= 0 ; i--) {
    console.log(i,nik[i]); 
}

// ---loop inside the loop---

for(let excercise = 1; excercise < 4; excercise++) {
        console.log(`---starting excercise ${excercise}`);
          for(let rep =1; rep < 6; rep++){
             console.log(`Excercise ${excercise}:  lifting weight repetation ${rep}`);
          }
}