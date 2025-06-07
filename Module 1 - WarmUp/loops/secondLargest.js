// Write a function to return second largest element in an array

function getSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array must contain at least 2 elements";
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let array = [4, 9, 0, 2, 8, 7, 1, 9];
console.log(getSecondLargest(array));
