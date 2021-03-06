// 7kyu - Calculator: Coin Combination 

// The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickles ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25

// So for example:
// coinCombo(6) --> [1, 1, 0, 0]

var coinCombo = function(cents) {
  let coins = [1,5,10,25], arr = [0,0,0,0];
  for (let i = 3; i >= 0; i--) {
      arr[i] = Math.floor(cents / coins[i]);
      cents -= arr[i] * coins[i];
  }
  return arr;
}