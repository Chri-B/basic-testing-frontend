
// UNITS: usually functions. These are the smallest block of code, maybe functions that doesn't call other functions.

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}
