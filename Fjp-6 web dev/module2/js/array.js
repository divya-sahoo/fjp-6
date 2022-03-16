// empty array
let arr=[];
console.log(arr);
// array with element
let elearr=[1,2,3,"hello",'char',4.5,false];
console.log(elearr);
console.log("element at 4th index: "+ elearr[4])
elearr[4]=34;
console.log(elearr);
// array method
// 1. push
console.log("array before push " +elearr);
elearr.push(56);
console.log("array after push " +elearr);
// 2. pop
console.log("array before pop "+elearr);
elearr.pop();
console.log("array after pop "+elearr);
// 3. shift
console.log("array abefore shift "+elearr);
elearr.shift();
console.log("array after shift "+elearr);
// unshift
console.log("array before unshift "+elearr);
elearr.unshift("hello");
console.log("array after unshift "+elearr);
// length
let len=elearr.length;
console.log(len);

