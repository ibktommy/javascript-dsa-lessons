// function to print at least the first 5 numbers

function logAtLeast5(n) {
  for (let i = 1; i<= Math.max(5,n); i++) {
    console.log(i);
  }
}

logAtLeast5(10000)

// BigO = O(n)
// The runtime of the function grows as 'n' grows

