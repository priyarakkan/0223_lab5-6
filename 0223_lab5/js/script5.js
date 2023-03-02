// VARIABLES
let miles, gallons, mpg;
let again = 'y';

do {
    miles = parseFloat(prompt('Enter the number of miles driven :'));
    gallons = parseFloat(prompt('Enter the gallon capacity of your vehicle :'));
    if(!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        console.log(`You vehicles gets ${mpg.toFixed(2)} miles per gallon.`)
    } else {
        alert('One or both of your entries are invalid.')
    }
    
    //  If it’s anything other than “y” or “n”,
    // the prompt should 
    //simply reappear until the user enters a valid entry
    again = window.prompt('Repeat entries? (y or n)', 'y');
    if(again == 'y' || again == 'n') {
        return;
    } else {
        alert('Enter valid entry.');
    }
} while(again === 'y')
console.log('Application has ended.')