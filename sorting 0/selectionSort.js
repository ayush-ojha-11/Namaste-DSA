let a = [5, 4, 3, 2, 1, 0];

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min_index]) {
        min_index = j;
      }
    }
    let temp = a[min_index];
    a[min_index] = a[i];
    a[i] = temp;
  }
  return a;
}

console.log(selectionSort(a));
