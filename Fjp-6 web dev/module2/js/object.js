// empty object
// let obj={};
// console.log(obj);

// let divya={
//     "name":"divya",
//     "age":"23",
//     "phonenumber":8496478454,
//     "lastname":"divya"
// }
// console.log(divya);
let capamerica={
    name:"steve",
    age:100,
    friend:['natasha','tony','divya'],
    address:{
        state:"uttarpradesh",city:"ghaziabad"},
        sayhi:function(){
            console.log("cap america says hiii")
        }

}
console.log(capamerica);
// name of capamerica
console.log(capamerica.friend)



// sayhi
capamerica.sayhi()
// second method to access a key
console.log(capamerica.name);
console.log(capamerica['name']);