// *
// **
// ***
// ****

// 1st way

let n = 4;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = i; j > 0; j--) {
    row = row + "*";
  }
  console.log(row);
}

//OR (2nd Way)

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < i + 1; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }
