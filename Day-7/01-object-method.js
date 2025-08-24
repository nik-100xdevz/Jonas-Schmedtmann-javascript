const nikhil = {
    firstName: 'nikhil',
    lastName: 'Rai',
    birthyear: 2003,
    job: 'student',
    friends: ['raj','suraj','deva','om'],
    hasDriverLicense: true,

    //normal function
    
    // calcAge: function(birthyear) {
        //     return 2037- birthyear;
        // }
        
        //this  function
        
    // calcAge: function(){
    //     // console.log(this);  
    //     return 2037- this.birthyear
    // }

    //
    calcAge: function(){
        this.age = 2037- this.birthyear;
        return this.age;
    }

};
console.log(nikhil.calcAge());// it called the this key word

console.log(nikhil.age);
console.log(nikhil.age);
console.log(nikhil.age);
// console.log(nikhil['calcAge'](2003)); 