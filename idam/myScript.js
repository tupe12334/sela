// variables :

let num = 1;
num = 28;
num = 'asjdhasgd';
const someStr = 'kajsbdn';
// someStr = 'aksjudn'; // <-- will throw an error
let str = 'string';
let bool = false;
bool += '!';
let objButNull = null;
let undef; // = undefined
let date = new Date();

// var <- never use it, always use -> // let / const
// var is always declared at its nearest function/object scopes
// let and const are block scopes

// arrays :

let array = [1, 'asd', { a: 2, b: '2' }, null, [, 1, 2, 3]];
let arr1 = new Array(3);
arr1.push(4);
arr1.push(['j', 'i']);
let arr2 = [];
arr2[5] = 'Six';
// console.log(array);
array.pop();
// console.log(array);

// objects :

let obj1 = {};
let obj2 = new Object();
obj1.name = 'Itzik';
let obj3 = { name: 'Itzik' };
obj2['name'] = 'Itzik';
obj2['FirstName'] = 'Yitzhak';
obj2.LastName = 'BubuKabubu';
let propName = 'age';
obj2[propName] = 13;
obj3.date = new Date();
delete obj2[propName];

// conversions :
let numberA = 34;
let stringA = numberA + '';
let numberB = Number(stringA);
let notANumber = Number('Deckel Vaknin'); // return NaN
let boolA = Boolean(1);

// functions
let returnV1 = sumFunc(2, 5);

function sumFunc(num1, num2) {
    return num1 + num2;
}

printSum(1, 5);
function printSum(num1, num2) {
    console.log(num1 + num2);
}

printParams('abc', 'efg', 'hij', 'ppp');
function printParams(p1, p2, p3) {
    console.log('p1: ', p1, 'p2: ', p2, 'p3: ', p3);
}

getArrayOf(1, 2, 3) // rest operator
function getArrayOf(...args) {
    console.log(args);
    return args;
}
let newArray1 = [4, 5, 6];
let newArray2 = [1, 2, 3, ...newArray1]; // spread operator
let newArray3 = [1, 2, 3, newArray1];

// conditions 
let someNumA = 2;
let someStrA = '2';
console.log('someStrA == someNumA :', someStrA == someNumA);
console.log('someStrA === someNumA :', someStrA === someNumA);
let someNumB = 3;
console.log('someNumB === someNumA :', someNumB === someNumA);
// == compares both values after conversions (IF NEEDED)
// === first compares type, then values
// if(typeof(someNumA) == typeof(someNumB) && someNumB == someNumA)

// switch case :

let switchString = 'david';
switch (switchString) { // compares values with ===
    case 'tomer':
        console.log('tomer: ', switchString);
        break;
    case 'david':
        console.log('david: ', switchString);
    case 42:
        console.log('answer: ', switchString);
        break;
    default:
        console.log('default: ', switchString);
        break;
}

// for loop

for (let i = 0; i < 10; i++) {
    // code goes here
}

let max = 5;
let sum = 0;
for (let i = 0; i < max; i++) {
    sum += i;
}
console.log('sum :', sum);
// for (// declare loop varialble; // do until; // do each end of loop)
let summedStr = '';
for (let i = 0; i <= 100 && summedStr.length < 120; i += 2) {
    summedStr += i;
}
console.log('str: ', summedStr);

// let arr1 = new Array(3);
// arr1.push(4);
// arr1.push(['j', 'i']);
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// while and do while

let someWhileNum = 1;
while (someWhileNum < 4) { // only enters after checking condition
    someWhileNum++;
    // console.log(someWhileNum);
}

let someDoWhileNum = 1;
do { // executes once and then checks condition
    someDoWhileNum++;
    console.log(someDoWhileNum);
} while (someDoWhileNum < 4);



