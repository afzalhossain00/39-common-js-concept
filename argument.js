// argument is array like object

function sum(a, b, c) {
    // console.log(arguments);
    const args = [...arguments]
    console.log(args)
    const result = a + b + c;
    return result;
}

// can not find outside of the function
// console.log(arguments);
const total = sum(25, 50, 20, 10, 20, 10)
console.log(total)
console.log(sum.length)