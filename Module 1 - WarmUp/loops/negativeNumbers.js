// Write a function to return number of negative numbers

let arr = [-1, 2, 3, -2, 10, -10, 100, -9];

function negativeCount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log(negativeCount(arr));
