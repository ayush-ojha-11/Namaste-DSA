// This is just an improved version of bubble sort, where if an array is already sorted, the algorithm will exit after only one iteration.

let a = [10, 3, 2, 15, 0, 20, 7];

function bubbleSort(a) {
  let n = a.length;

  for (let i = 0; i < n - 1; i++) {
    // we take a boolean
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        isSwapped = true;
      }
    }
    // check if swapped happen or not. If no swapping happens, that means we got the sorted array already
    if (!isSwapped) break;
  }
  return a;
}

console.log(bubbleSort(a));
