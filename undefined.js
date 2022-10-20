/* 
 8 ways to get undefined

 1. variable that is not initialized will give undefined
 2. function with no return
 3. parameter that is not passed will be undefined
 4. if return has nothing on the right side will return undefined
 5. property that doesn't exists on an object will give you undefined 
 6. accessing array elements outside of the index range will give you undefined
 7. deleting an element inside an array
 8. set a value directly undefined
*/

//1. variable that is not initialized will give undefined
let first;
console.log(first)

// 2. function with no return
function second(a, b) {
    const total = a + b;
}
const result = second()
console.log(result)


//  3. parameter that is not passed will be undefined
function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d)
}
third(5, 10)

// 4. if return has nothing on the right side will return undefined
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
}
const total = noNegative(2, -1)
console.log(total)

// 5. property that doesn't exists on an object will give you undefined 
const fifth = { id: 4, name: 'panchom', age: 26 }
console.log(fifth.age, fifth.salary)

//  6. accessing array elements outside of the index range will give you undefined
const sixth = [12, 14, 16, 19, 20]

//  7. deleting an element inside an array
// you should not do it. Instead use splice 
delete sixth[1]
console.log(sixth[1], sixth[6], sixth[20])
console.log(sixth)

//  8. set a value directly undefined
const eight = undefined;


// if data is not found/ nothing use null
const ninth = null;

const data = { results: [], updated: null }

console.log(typeof undefined, typeof null)


