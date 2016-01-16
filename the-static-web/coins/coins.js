// Write a program that will convert a dollar amount to the 
// number of coins that make up the amount. Use the common 
// American coins of quarters, dimes, nickels, and pennies.



/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

var money = 0.49;
console.log("$" + money);

function coinCounter (money) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

  money *= 100;
  // debugger;

  do {
    if (money >= 25) {
      coinPurse.quarters++;
      money -= 25;
      // debugger;
    } else if (money < 25 && money >= 10) {
      coinPurse.dimes++;
      money -= 10;
      // debugger;
    } else if (money < 10 && money >= 5) {
      coinPurse.nickels++;
      money -= 5;
      // debugger;
    } else if (money < 5) {
      coinPurse.pennies++;
      money -= 1;
      // debugger;
    }
  } while (money > 0);

  return coinPurse;
}

var coins = coinCounter(money);

console.log("Quarters: " + coins.quarters);
console.log("Dimes: " + coins.dimes);
console.log("Nickels: " + coins.nickels);
console.log("Pennies: " + coins.pennies);




// switch (true) {
//       case money >= 0.25:
//         coinPurse.quarters++;
//         money = money - 0.25;
//         debugger;

//       case money >= 0.10:
//         coinPurse.dimes++;
//         money = money - 0.10;
//         debugger;
      
//       case money >= 0.05:
//         coinPurse.nickels++;
//         money = money - 0.05;
//         debugger;

//       case money >= 0.01:
//         coinPurse.nickels++;
//         money = money - 0.01;
//         debugger;

//       default:
//         break;
//     }