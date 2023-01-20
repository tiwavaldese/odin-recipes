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
}add(9,7);

let sUm = function add(x,y){
    console.log(x + y);
 } (5,15);

 let suM = function (x,y){
    console.log(x + y);
 } (100,15)
