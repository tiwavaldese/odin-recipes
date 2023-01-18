alert


const Cars= ['BMW', 'volvo', 'Mini'];
let T4= "";
for(let x of Cars){
  
  T4 += x;
  console.log(x);
}

const language= "Javascript";
let T5= "";
for(let x of language){
  T5 += x;
  console.log(x);
}

let nums= [];
nums[0]= 5;
nums[99]= 9;
for(let n of nums){
  console.log(n);
}
  

const namE=('W3Schools');
for(const x of namE){
  console.log(x);
}

const letterS=['A','B','C'];
for(const x of letterS){
  console.log(x);
}

const letteRs=new Set(['a','b','c']);
for(const x of letteRs){
  console.log(x);
}
const Fruits = new Map([
  ['Apples',500],
  ['Bananas',300],
  ['Oranges',200],
])
for(const x of Fruits){
  console.log(x);
}