alert
    //your javascript goes here!
    console.log("Hello ,world")

    let username='Mary';
     let age=24;
     let message= 'hello';

     console.log(username)
     console.log(age)
     console.log(message)

     let x = 30;
     let y =50;
     let z =x+y;
     console.log(z)
    
     let xa = 60;
     let yb =10;
     let zc =xa-yb;
     console.log(zc)
    
     let x1 = 30;
     let y1 =50;
     let z1 =x1*y1;
     console.log(z1)

     let x2 = 40;
     let y2 =30;
     let z2 =x2/y2;
     console.log(z2)

     let x3 = 5;
     x3++;
     let z3 =x3;
     console.log(z3)

     let x4 = 5;
     x4--;
     let z4 =x4;
     console.log(z4)

     let x5= 5;
     let z5= x**2;
     console.log(z5)

     let xb = 237e5;
     let zb  = 237e-5;
     console.log(xb)
     console.log(zb)

     let x6 = 10;
     let y6 = 5;
     let z6 = 10+ 5;
     console.log(z6)

     let x7= 16 + 4 + "volvo"
     console.log(x7)

     let x8= "volvo" + 16 + 4;
     console.log(x8)

     let username1= "he is called 'Johny'"
     console.log(username1)

     let username2= 'he is called "Johny"'
     console.log(username2)

     let x9 = 5;
     let y9 = 5;
     let z9 = 6;
     console.log(x9==y9)
     console.log(x9==z9)

     let lenght = 16;
    const  firstName ="mercy";
    const lastName1 ="Doe";
    const myBirthday ='05/04/2022';
   
     console.log(lenght)
     console.log(firstName)
     console.log(lastName1)
     console.log(myBirthday)
     
     let x11 = (0.2*10 + 0.1*10)/10;
     console.log(x11)
     
     let x12 = "10";
     let y12 = 20;
     let z12 = x12 + y12;
     console.log(z12)

     let x13 = 10;
     let y13 = 20;
     let z13 = "30";
     let result = x13 + y13 + z13
     console.log(result)

     let x14 = "100";
     let y14 = "10";
     let z14 = x14/y14;
     console.log(z14)

     let x15 = "100";
     let y15 = "10";
     let z15 = x15*y15;
     console.log(z15)

     let x16 = "100";
     let y16 = "10";
     let z16 = x16 - y16;
     console.log(z16)

     let x17 = "100";
     let y17 = "10";
     let z17 = x17 + y17;
     console.log(z17)

     let x18 = "NAN";
     let y18 = 10;
     let z18 = x18 + y18;
     console.log(z18)

     let c= "NAN";
     let C1= "C"**0;
     console.log(C1)

     let x19 = 123;
     let y19 = new Number(123)
     console.log(x19)
     console.log(y19)

     let max= 57;
     let actual= 44;
     let percentage=actual/max;
     console.log(percentage)


     const sales=100;
     const cost= 50;
     const profit=sales+cost;

     console.log(profit);

  let ageA = null;
  console.log(ageA)

  const name = "front";
  const number= 242;
  console.log(name);
  console.log(number);

  const mystring = "123";
  const myNum= (mystring);
  console.log(myNum);
   
  const myNum2 = 123;
  const mystring2 = myNum2.toString();
  console.log(mystring2)
  

  const song ="fight the youth";
  const score =9;
  const highestscore=10;
  const output= `I like the song ${song}.\i gave it a score  of ${(score/highestscore) *100}%`;
  console.log(output); 

  const output1=   `I like the song.
I gave it a score of 90%.`;
  console.log(output1);

  const output2=   `I like the song.\nI gave it a score of 90%.`;
  console.log(output2);


const badstring= String;
const badstring1='this is a test';
const badstring2 = "this is a test"
console.log(badstring);
console.log(badstring1);
console.log(badstring2);

const sgl= 'would you eat a "fish super"?';
const dbl= "i'm feeling bleu";
const sgla = 'I\'ve got no right to take a place';
console.log(sgl);
console.log(dbl);
console.log(sgla);

const one= "hello,";
const two= 'how are you?';
const three= "hope fine";
const joint= `${one}${two},${three}`;
console.log(joint);

const greetings="hello";
const name1= "vera";
const dbla = "how are you doing?";
console.log(`${greetings},${name1},${dbla}`)

const browertype= 'mozilla';
console.log(browertype.length);
console.log(browertype[0]);
console.log(browertype[browertype.length-1]);

const browserType = 'mozilla';

if (browserType.startsWith('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}


if (browserType.endsWith('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}


const browertype1= 'mozilla';
console.log(browertype1.slice(1,4));

const browertype2= 'mozilla';
console.log(browertype1.slice(2));



let browertype4= 'mozilla';
const browsertype4=browertype4.replace('moz','van');
console.log(browsertype4);

let quote='To be or not to be';
quote=quote.replaceAll('be','code');
console.log(quote);



const cities7='manCHESTER,LONdon,LIVERpoOL,EDINburgh,CARlisle';
console.log(cities7.toLowerCase());
console.log(cities7.toUpperCase());
console.log(cities7[0].toUpperCase());


const product= `'Underpants:$6.99'
              'Socks:$5.99'
              'Tshirt:$14.99'
              'Trousers:$31.99'
              'Shoes:$25.99'`;

  const subArray= product.split(':');
  const Name= subArray[0];
  const price= Number(subArray[1]);
  const itemTEXT= `${Name} - $${price}`
  
console.log(subArray);
console.log(Name);
console.log(price);
console.log(itemTEXT);

let text1="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let length= text1.length;
console.log(length);


let text2="Apple,Banana,Kiwi";
let part=text2.slice(7,13);
console.log(part);

let text3="Apple,Banana,Kiwi";
let part1=text3.slice (-12,-6);
console.log(part1);

let text4="Apple,Banana,Kiwi";
let part2=text4.substring(-12);
let part3=text4.substring(7,13);
console.log(part2);
console.log(part3);

let str="Apple,Banana,Kiwi";

let part4=str.substr(7,8);
let part5=str.substr(-4)
console.log(part4);
console.log(part5);

let str1="please visit Microsoft and microsoft!";
let part6=str1.replace("Microsoft","W3School");
console.log(part6);


let str2="please visit microsoft!";
let part7=str2.replace(/MICROSOFT/i,"W3School");
console.log(part7);

let str3="please visit the cats";
let part8=str3.replaceAll("cats","Dog");
console.log(part8);

let str4='Hello';
let str5= 'World';
let str6=str4.concat('', str5);
console.log(str6);

let str7= '     HelloWorld      ';
let str8= str7.trimEnd();
let str9=str7.trimStart();
console.log(str8);
console.log(str9);

let text5= '5';
let padded=text5.padStart(3,'0');
console.log(padded)

let num= 5;
let text6=num.toString();
let padded1=text6.padStart(4,'0');
console.log(padded1);

let text7= '5';
let padded2=text7.padEnd(4,'0');
console.log(padded2)

let num1= 5;
let text8=num.toString();
let padded3=text8.padEnd(4,'0');
console.log(padded3);

let txt= 'HELLO WORLD';
let char= txt.charAt(0);
console.log(char);

let txt1= 'HELLO WORLD';
let char1= txt1.charCodeAt(0);
console.log(char1);

let txt2= 'HELLO WORLD';
let char2= txt2[0];
console.log(char2);

let txt3="please locate where 'locate' occur!";
console.log(txt3.indexOf("locate"));


let txt4="please locate where 'locate' occur!";
console.log(txt4.lastIndexOf("locate"));

let txt5="please locate where 'locate' occur!";
console.log(txt5.indexOf("John"));

let txt6="please locate where 'locate' occur!";
console.log(txt6.lastIndexOf("John"));

let txt7="please locate where 'locate' occur!";
console.log(txt7.indexOf("locate",15));

let txt8="please locate where 'locate' occur!";
console.log(txt8.lastIndexOf("locate",15));

let txt9="please locate where 'locate' occur!";
console.log(txt9.search(/locate/));

let txt0="please locate where 'locate' occur!";
console.log(txt0.search("locate"));


let dat1= "The rain in SPAIN mainly in the plain";
console.log(dat1.match(/ain/))

let dat2= "The rain in SPAIN mainly in the plain";
console.log(dat2.match(/ain/g))

let dat3= "The rain in SPAIN mainly in the plain";
console.log(dat3.match(/ain/gi))

let iterator= 'cats';
console.log(iterator.matchAll(/cats/gi));


let dat4= "Hello World, welcome to the universe.";
console.log(dat4.includes("World"))

let dat5= "Hello World,welcome to the universe.";
console.log(dat5.includes("World",12));

let dat6= "Hello World, welcome to the universe.";
console.log(dat6.startsWith("Hello"))

let dat7= "Hello World, welcome to the universe.";
console.log(dat7.startsWith("World"))

let dat8= "Hello World, welcome to the universe.";
console.log(dat8.startsWith("World",6))

let dat9= "Hello World, welcome to the universe.";
console.log(dat9.endsWith("World"))

let dat0= "Hello World, welcome to the universe.";
console.log(dat0.endsWith("World", 11))

let daT= "John Doe";
console.log(daT.endsWith("Doe"));

let fName= "John";
let lName= "Doe";
let tet= `welcome ${fName},${lName}!`;
console.log(tet);

let P=10;
let VAT= 0.25;
let T= `TOTAL:${(P*(1+VAT)).toFixed(2)}`;
console.log(T);

let header= "Templates Literals";
let tags= ["templates literals","javascript","es6"];
let html= `<h2>${header} </h2><ul>`;
for (const x of tags){
  html += `<li>${x}</li>`;
}
html += `</ul>`;
console.log(html);



const a = "a";
const b = "b";

if (a<b){
  console.log(`${a} is less than ${b}`)
}

else if (a>b){
  console.log(`${a} is greater than ${b}`)
}
else {
  console.log(`${a} and ${b} are equal.`);
}


const areEqualInUpperCase= (str1,str2)=>
str1.toUpperCase()=== str2.toUpperCase();
const areEqualInLowerCase= (str1,str2)=>
str1.toLowerCase()=== str2.toLowerCase();

console.log(areEqualInUpperCase);
console.log(areEqualInLowerCase);

console.log(areEqualInUpperCase("ß","ss",));
console.log(areEqualInLowerCase("i", "I"));

const areEqual1= (str1,str2, locale = "en-us")=>
str1.localeCompare(str2,locale,{sensitivity: "accent"})===0;
console.log(areEqual1);

const striprim = "foo";
const striprim1 = 'string(1)';
const striprim2 = 'string(true)';
const srtObj = new String(striprim);
 
console.log(typeof striprim);
console.log(typeof striprim1);
console.log(typeof striprim2);
console.log(typeof striObj);

const s1= "2 + 2";
const s2= new String("2 + 2");

console.log(eval(s1));
console.log(eval(s2));
console.log(eval(s2.valueOf()));

const longstring=                                                    
"This is a very long string which need \
to wrap across multiple lines because \
otherwise my code is unreadable.";

console.log(longstring);

console.log("😄".split(""));
console.log("👨‍👦".split(""));

const t= "Hello world";
console.log(t.bold());

const tx= "Hello world";
console.log(tx.italics());

let st= '05'>4;

console.log(st);

let sr= a>z;

console.log(sr);

let st1= 'glow'>'glee';
let s='apple'>'pineapple';
console.log(st1);
console.log(s);


let st2= '01'==1;

console.log(st2);

let st3= true==1;
let st4= false==0;

console.log(st3);
console.log(st4);

let d= 0;
let e= '0';
console.log(Boolean(d));
console.log(Boolean(e));
console.log(d==e);

console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(undefined==null);
console.log(undefined===null);

if (x>y);
console.log("hello world");

let hour =9;

if (hour>= 6 && hour < 12){
console.log('Good morning');
}

 else if (hour>= 12 && hour < 18){
console.log('Good afternoon');
}
else{
console.log('Good Evening')};


let hour1 =13;

if (hour1>= 6 && hour1 < 12){
console.log('Good morning');
}

 else if (hour1>= 12 && hour1 < 18){
console.log('Good afternoon');
}
else{
console.log('Good Evening')};



let hour2 =19;

if (hour2>= 6 && hour2 < 12){
console.log('Good morning');
}

 else if (hour2>= 12 && hour2 < 18){
console.log('Good afternoon');
}
else{
console.log('Good Evening')};


for(let i=0; i<10; i++){
  if(i === 4){break;}
  console.log('The number is' +i,+'<br>')
}


for(let i=0; i<10; i++){
  if(i === 4){continue;}
  console.log('The number is' +i,+'<br>')
}

const cArs= ['BMW','Volvo','Saab','Ford'];
list:{
 console.log(cArs[0] + '<br>');
  console.log(cArs[1] + '<br>');
  break list;
  console.log(cArs[2] + '<br>');
  console.log(cArs[3] + '<br>');
 
}


let shoppingDone= false;
let childAllowance;
if(shoppingDone === true){
  childAllowance = 10;
  console.log('true');
}else{
  
  console.log('false');
}

function checkWinner(win){
  win? console.log('you win!') : console.log('you lose!');
}checkWinner(false);


function checkAge(age){
  return age >=21 ? "you get beer!" : "you get Apple juice!";
}
console.log(checkWinner(21));

let login= ("what's the official name of Javascript?",'');
if(login=== 'ECMAScript'){
  
  console.log('right')
}
else{ 
  console.log("you don't know 'ECMAScript'");
}

let userName = ("who's there?",'');
if(userName === 'Admin'){
  let pass= ('password','');
  if(pass === 'TheMaster'){
    console.log('welcome');
  }else if(pass === ''|| pass === null){
    console.log('wrong password')
  }
}else if(userName === ''|| userName === null){
  console.log("i don't know you");
}