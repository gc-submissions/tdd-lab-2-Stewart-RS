function formatCurrency(amount) {
  //amount = amount.toFixed(2);
  if (amount < 0) {
    //return "-$"+amount.toFixed(2);
    return "-" + formatCurrency(-amount);
  } else {
    return "$" + amount.toFixed(2);
  }
}

function getCoins(cents) {
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;
  let change = cents;

  while (change > 0) {
    if (change >= 25) {
      quarters++;
      change -= 25;
    } else if (change >= 10) {
      dimes++;
      change -= 10;
    } else if (change >= 5) {
      nickels++;
      change -= 5;
    } else if (change >= 1) {
      pennies++;
      change -= 1;
    }
  }
  return {
    quarters: quarters,
    dimes: dimes,
    nickels: nickels,
    pennies: pennies,
  };
}

module.exports = { formatCurrency, getCoins };
