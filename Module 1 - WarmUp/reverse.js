// Write a function that returns reverse of a number

function reverseIt(n) {
  let rev = 0;
  let rem = 0;
  while (n > 0) {
    rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  return rev;
}

console.log(reverseIt(2428));
