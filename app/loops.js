// 1. Within the factorials function, write a loop that begins at 1 and multiplies every consecutive
// number up to and including the given number(num). Return the total after the loop completes.
// Example:
// input: 4
// output: 24
// 1*2*3*4 = 24

function factorials(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product = product * i;
  }
  return product;
}

// ------------------------------------------

// 2. Write a function that sums up all of the numbers in a range
// Example:
// input: 2, 6
// output: 20

function rangeTotal(n1, n2) {
  let product = 0;
  for (let i = n1; i <= n2; i++) {
    product = product + i;
  }
  return product;
}

// ------------------------------------------

// 3. Write a function that will take in a starting number, ending number, and a divisor. Iterate
// over the range of the numbers and rtuen how many numbers can be divided by the divisor.
// Example:
// input: 15, 20, 5
// output: 2

function rangeDivisor(start, end, divisor) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (i % divisor == 0) {
      count++;
    }
  }
  return count;
}
