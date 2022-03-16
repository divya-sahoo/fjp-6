// function is js without parameter and without return type
function sayhello(){
    console.log("hello from functions");

}
sayhello();
// functions with parameter
function sum(num1,num2){
    let addition=num1+
    num2;
    console.log(addition);
}sum(3,5);
// function with return type
function multiply(num1,num2){
return num1*num2;
}
let ans=multiply(3,7);
console.log(ans);
// functions are first class citizen in js 
let a=function sum(num1,num2){
    return num1+num2;
}
console.log(a(3,5));
// IIFE(IMMEDIATELY INVOKED FUNCTION EXPRESSION)
(function (){
    console.log("hello world");

})();
// IIFE with parameter
(function sum(num1,num2){
    console.log(num1+num2);

})(10,5);

