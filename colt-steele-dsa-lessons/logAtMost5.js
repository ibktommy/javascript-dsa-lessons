// Function to Print a maximum of the first 5 numbers regardless of input

function logAtMost5(n) {
  for(let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(1000000000)

// BigO = O(1)
// The runtime of the function remains almost constant as it depends on the constant value of '5'