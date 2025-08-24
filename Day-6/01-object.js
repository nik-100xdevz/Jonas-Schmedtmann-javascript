const nikhil = {
    firstName: 'nikhil',
    lastName: 'Rai',
    age: 2024-2003,
    job: 'student',
    friends: ['raj','suraj','deva','om']
};
//accesing and retriviewing data from an object
console.log(nikhil.lastName);//dot notation dot is acutally a operator h
console.log(nikhil['lastName']);//Bracket in this we canput any expression

const namekey = 'Name';
console.log(nikhil['first' + namekey]);
console.log(nikhil['last' + namekey]);

const intrestedIn = prompt("hat do you want to know about jonas?choose between firstName, lastName,age,joband friends");
console.log(nikhil[intrestedIn]);
if (nikhil[intrestedIn]) {
    console.log(nikhil[intrestedIn]);

} else{
    console.log('Wrong request ! choose between firstName , lastName, age job , and freinds');
}
// To add in object 
nikhil.location ='india';
nikhil['university'] = 'Mumbai university';
console.log(nikhil);

// challange
//"nikhil has 3 freinds , and his best friend is called raj"
console.log(`${nikhil.firstName} has ${nikhil.friends.length} friends and his best friend is ${nikhil.friends[1]}`);
