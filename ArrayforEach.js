alert


const Num=[45, 4, 9, 16, 25];
Num.forEach(myFunction);
function myFunction(value,index,array){
  let T3="";
  T3 += value;
  console.log( +T3);
} 

let sum= 0;
let cart= [5,6,7,8,9];
function checkout(element, index, array){
  sum +=element;
}
cart.forEach(checkout);
console.log("your sum is: $" +sum);

