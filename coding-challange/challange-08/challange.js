const calctips = function(bill) {
    if (bill <=300 && bill >= 50 ) {
        return bill * 0.15;
        
    } else {
        return  bill * 0.2;
    }
}

const calcAvg = function(arr) {

}

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips =[];
const total = [];
const arr = [];

for ( let i =0; i < bills.length; i++){
   tips.push(  calctips(bills[i]) );
}
// console.log(tips);
for ( let j = 0; j<tips.length; j++) {
    total.push(bills[j]+tips[j]);
}
console.log(`bills: ${bills} \n tips: ${tips} \n total: ${total} `);