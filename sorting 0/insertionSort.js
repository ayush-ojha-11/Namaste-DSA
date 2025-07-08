let a = [5, 4, 3, 2, 1, 0, -10];

function insertionSort(a) {
  let n = a.length;

  for (let i = 1; i < n; i++) {
    let current = a[i];
    let prev = i - 1;
    while (a[prev] > current && prev >= 0) {
      a[prev + 1] = a[prev];
      prev--;
    }
    a[prev + 1] = current;
  }

  return a;
}

console.log(insertionSort(a));
