//  printing in javascript
 console.log("hello world");
//  variables in js 
let a=10; //number
console.log(a);
// character
let char='a';
console.log(char);
// String
let string="i am divya";
console.log(string);
// boolean
let bool=true;
console.log(bool);
// loops
for(let i=1;i<=5;i++){
    console.log(i);
}
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

// is prime
let n=5;
isprime=true;
for(i=2;i*i<=n;i++){
    if(n%i==0)
    isprime=false;
}
if(isprime==true){
    console.log("number is prime");
}
else{
    console.log("number is not prime");
}