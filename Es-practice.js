4.
// map 
var arr = [14,21,35,28,70,77,84]
var newArr = arr.map((num) => num / 7)
// console.log(newArr);

5.
// for each 
var arr = [14,21,35,28,70,77,84]
// arr.forEach(num => console.log(num))

// filter 
var result = arr.filter(num => num  > 30)
// console.log(result);

// find

var arr = [14,21,35,28,70,77,84]

var result = arr.find(num => num > 70)
// console.log(result)

// 6.   array destructing  

var obj = {
    name : 'Suchi',
    age : 23 
}

const {name, age} = obj;

console.log(name , age);

// object destructing  

var arr = [23,40]
const [a,b] = arr ;
console.log(b + a);




