alert


let resul= b||a;
console.log(resul);

console.log(true||true);
console.log(false||true);
console.log(true||false);
console.log(false||false);

let h= 9
if(h<10||h>18){
  console.log('true');
}else{
  console.log('false');
}
let j=10,k=10;
if(j === 10|| k === 10){
  console.log('true');
}else{
  console.log('false');
}

let j1=10,k1=10;
if(j1 === 10|| k1 === 5){
  console.log('true');
}else{
  console.log('false');
}

let j2=10,k2=10;
if(j2 === 5|| k2 === 5){
  console.log('true');
}else{
  console.log('false');
}

let houR= 12
let isWeekend=true;
if(houR<10 || houR>18 || isWeekend){
  console.log('true');
}else{
  console.log('false')
}

let firstN="";
let lastN="";
let nickN= 'supercoder';
console.log(firstN||lastN||nickN||Anonymous);

true||console.log('not printed');
false||console.log('printed');

console.log(null || 2 || undefined);

console.log(console.log(1) || 2 || console.log(3));

console.log(null || 2 && 3 || 4);

if (-1 || 0)console.log('first');
if (null ||-1 && 1)console.log('third');

