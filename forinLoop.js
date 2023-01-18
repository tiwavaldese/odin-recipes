alert

const person={fname: 'John', lname: 'Doe', age: 25};
let T1="";
for(let x in person){
  T1 += person[x];
  console.log(person[x]);
}

const N=[45, 4, 9, 16, 25];
let T2="";
for(let x in N){
  T2 += N[x]; 
  console.log(N[x]);
}


let Car= {
    make: 'chevy',
    model: 'corvette',
    year: '2022',
    color: 'red'
  }
  for(let property in Car){
    console.log(Car[property]);
  }

  let letter= ['H','E','L','P'];
  for(let i in letter){
    console.log(letter[i]);
  }

  let nums1= [];
  nums1[0]= 5;
  nums1[99]= 9;
  
  for(let key in nums1){
    console.log(nums1);
    console.log(nums1.length);
  }