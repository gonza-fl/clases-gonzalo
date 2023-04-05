// Bucles en js

const great = 'Hola mundo';
let flag = 'soy primer flag';
const nombre = 'Gonzalo';

// // Do While

do {
  console.log(flag);
  console.log(great + ' ' + nombre);
  flag = flag + 1;
} while (flag < 3 && nombre !== '');

flag = 0;

// While

while (flag < 3 && nombre !== '') {
  console.log(flag);
  console.log(great + ' ' + nombre);
  flag = flag + 1;
}

// var flag = 0;

for (let flag = 0; flag < 10; flag = flag + 1) {
  let flag = 0;
  console.log(flag);
}

console.log(flag);

console.log('Chau mundo');
