// bollean opeartor  (and , or , Not opeartor )
const hasDriverLicense = true; //A
const hasGoodvision = false; //B

console.log(hasDriverLicense && hasGoodvision);//AnD
console.log(hasDriverLicense || hasGoodvision);// or
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodvision ;

// if (shouldDrive) {
//     console.log('sarah is able to drive');
    
// } else {
//     console.log("someone should drive");
    
// }

const isTired = false; //c


console.log(hasDriverLicense || hasGoodvision || isTired);
console.log(hasDriverLicense && hasGoodvision && isTired);

if (hasDriverLicense && hasGoodvision && !isTired) {
    console.log('sarah is able to drive');
    
} else {
    console.log("someone else should drive");
    
}
