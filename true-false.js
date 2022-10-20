/* 
Truthy:
1. true
2. Any number (+ve , -ve) will be truthy other than 0
3. any string other than empty string 
4. '0', 'false' , 'null' with quoted 
5. {}
6. []
7. ()

Falsy:
1. false
2. 0
3. '' empty string
4. undefined
5. null
6. NaN
*/

let x = false
if (x) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

// optional: 
//check falsy
const y = null;
if (!y) {
    console.log('value is falsy')
}

//check truthy
const z = { id: 12 };
if (!!z) {
    console.log('value is truthy')
}

const isTrue = 'false';
if (!isTrue) {
    console.log('hello');
} else {
    console.log('world');
}