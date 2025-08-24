const friends = ['micheal', 'raj','om','ankit'];
// Add new elements
const newLength = friends.push('jay');
console.log(friends);
console.log(newLength); // we can check imeadititaly 


friends.unshift('jhon'); //add element in starting of elemnt 
console.log(friends);

//Remove elements
friends.pop(); //Last
const popped = friends.pop();
console.log(friends);

friends.shift();// First element removal 
console.log(friends);

console.log(friends.indexOf('raj'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('raj'));// to check if element in the array or not 
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('om')) { // only if this is true it will logged 
    console.log(`You have friend called Om`);
}