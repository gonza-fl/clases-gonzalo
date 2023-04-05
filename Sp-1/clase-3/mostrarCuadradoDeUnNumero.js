const square = 2;
const limit = 10;
let acc = 2;

do {
  console.log(acc + 'x' + square + '=' + acc * square);
  acc++;
} while (acc <= limit);
