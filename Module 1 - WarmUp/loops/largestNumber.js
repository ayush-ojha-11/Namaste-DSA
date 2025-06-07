// Write a function to return largest number in an array
function getLargestNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let result = getLargestNumber([1, 2, 3, 4, 5, 6, 0]);

console.log(result);
