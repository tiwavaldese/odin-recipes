alert


function greet(){
    console.log('Hello global');
}
greet();

function greet(name){
    console.log(`Hello, ${name}!`);
}
greet('son');

function add(x,y){
   console.log(x + y);
}
add(9,7);

let sUm = function add(x,y){
    console.log(x + y);
 } (5,15);

 let suM = function (x,y){
    console.log(x + y);
 } (100,15)

 const multiply= (x,y)=>{
    console.log(x*y);
 }
 multiply(40,4);

 const square= x =>{
    console.log(x*x);
 }
 square(9);

 const squares = x =>console.log(x*x);
squares(12);