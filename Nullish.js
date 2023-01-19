alert

let User;
console.log(User ?? 'Anonymous');

let Users = 'Mary'
console.log(Users ?? 'Anonymous');

let firstn= null;
let lastn= null;
let nickn= 'supercoder';
console.log(firstn ?? lastn ?? nickn ?? 'Anonymous');

let firstna= null;
let lastna= null;
let nickna= null;
console.log(firstna ?? lastna ?? nickna ?? 'Anonymous');

let het= 0;
console.log(het || 100);
console.log(het ?? 100);

let hei= null;
let wid= null;
let area = (hei ?? 100)*(wid ?? 50);
console.log(area);

let f= (1 && 2) ?? 3;
console.log(f);