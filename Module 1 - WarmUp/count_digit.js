// Write a function that returns number of digits in a number
function counDigits(n) {
  if (n == 0) return 1;
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(counDigits(242));
