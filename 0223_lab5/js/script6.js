// GLOBAL VARIABLES
let futureValue, investment, rate, years;

// COLLECT THE VALUES FROM THE USER
//Within investment, the number should be numeric. 
//Within rate, the number should be numeric and between 0 and a realistic rate like 6%. 
//For years, the number should be numeric and between 1 and 30.

investment = parseFloat(prompt('Enter investment amount as xxx.xx + <br>'));

rate = parseFloat(prompt('Enter the rate that your hoping to get on your investment as xx.x'));

years = parseInt(prompt(`How many years do you want to invest for?  <br>`));

// CALCULATE THE FUTURE VALUE
futureValue = investment
for (let  i = 0; i < years; i++) {
    if(rate <= 7 && rate >= 0 && years <= 31 && years >= 0 && !isNaN(investment)) {
        futureValue = futureValue + (futureValue * rate / 100); 
        document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
        document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
        document.write(`Years: ${years}<br>`);
        document.write(`Future value: $${futureValue.toFixed(2)}`);
        return;
    } else {
        alert('Enter valid input.') 
        break;
    }
    
}

