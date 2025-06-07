// 1
// 01
// 010
// 1010
// 10101

let n = 5;
let s = 1;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + s;
    if (s == 1) {
      s = 0;
    } else {
      s = 1;
    }
  }

  console.log(row);
}
