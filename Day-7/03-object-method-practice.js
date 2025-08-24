const nikhil = {
    firstName: 'nikhil',
    lastName: 'Rai',
    birthyear: 2003,
    job: 'student',
    friends: ['raj','suraj','deva','om'],
    hasDriverLicense: true,
    calcAge: function(){
        this.age = 2037- this.birthyear;
        return this.age;
    },
    getSummery: function() {
        return `${this.firstName} is a ${this.calcAge()}
        -year old ${nikhil.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
    }

};

console.log(nikhil.calcAge());// it called the this key word
console.log(nikhil.getSummery());

