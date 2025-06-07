// 1
// 12
// 123
// 1234
// 12345

let n = 5;
for (let i = 0; i < n; i++) {
  let count = 1;
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + count++;
  }
  console.log(row);
}
