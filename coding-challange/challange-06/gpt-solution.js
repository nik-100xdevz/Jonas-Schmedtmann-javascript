// Function to calculate tips based on a single bill
const calctips = function (bill) { 
    if (bill <= 300 && bill >= 50) { 
        return bill * 0.15; // Tip is 15% if bill is between 50 and 300
    } else { 
        return bill * 0.2; // Tip is 20% otherwise
    }
};

// Array of bills
const bills = [125, 555, 44];

// Arrays to store tips and totals
const tips = [];
const totals = [];

// Loop through each bill to calculate tips and totals
for (let i = 0; i < bills.length; i++) {
    const tip = calctips(bills[i]); // Calculate tip for the current bill
    tips.push(tip); // Add tip to the tips array
    totals.push(bills[i] + tip); // Calculate total and add to totals array
}

// Output the results
console.log("Bills:", bills); // Original bills
console.log("Tips:", tips);   // Tips for each bill
console.log("Totals:", totals); // Total amounts (bill + tip)
