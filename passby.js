// primitive types are pass by values
let num1 = 5;
let num2 = 10;

function multiply(a, b) {
    a = 10;
    const result = a * b;
    return result
}
console.log(num1)
const output = multiply(num1, num2)
console.log(output)

// object and array are pass by reference
let student1 = { name: 'jalil', partner: 'borsha' }
let student2 = { name: 'raj', partner: 'pori' }

function makeMovie(couple1, couple2) {
    couple1.name = 'onanto'
    couple2.partner = 'apu'
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2)