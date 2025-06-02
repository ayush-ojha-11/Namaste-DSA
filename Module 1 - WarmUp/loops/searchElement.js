// Write a function that searches for an element in an array and returns its index. Return -1 if the element is not present.

let arr = [1, 2, 3, 4, 20, 10, 20, 50];
function search(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

let result = search(arr, 20);
console.log(result);
