const nikhil = {
    firstName: 'nikhil',
    lastName: 'Rai',
    birthyear: 2003,
    job: 'student',
    friends: ['raj','suraj','deva','om'],
    hasDriverLicense: true,

    driverLicense: function(){
        if (this.hasDriverLicense) {
            this.license = 'a';
        } else {
            
            this.license = 'no';
        }
    } ,

    calcAge: function(){
        this.age = 2037- this.birthyear;
        return this.age;
    }

};
console.log(nikhil.calcAge());// it called the this key word
console.log(nikhil.driverLicense());// it called the this key word

console.log(`Name is ${nikhil.firstName} and his age is ${nikhil.age} and job is ${nikhil.job} and freinds are ${nikhil.friends} and he has  ${nikhil.license} driverlincense`);