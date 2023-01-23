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

function Alien(name,tech){
   this.name= name;
   this.tech= tech;
   this.work= function(){
      console.log('solving bugs from 12hours')
   }
}
let alien1= new Alien('Nabin','JS');
let alien2= new Alien('Karen','Java');
alien1.tech= 'Blockchain';
console.log(alien1);


function UseR(email, name,){
   this.email= email;
   this.name= name;
   this.online= function(){
      console.log('true');
   }
}
let useROne= new UseR('tiwa@gmail.com', 'tiwa');
let useRTwo= new UseR('val@gmail.com', 'val');
useROne.online= 'true';
console.log(useROne);


function Hero(name,level){
   this.name= name;
   this.level= level;
}
   function Warrior(name,level,weapon){
      Hero.call(this,name,level);
      this.weapon= weapon;
}
function Healer(name,level,spell){
   Hero.call(this,name,level);
   this.spell= spell;
}
this.greet= function(){
   console.log(this.name ,'says hello')
}
const hero1= new Warrior('Bjorn',1, 'axe');
const hero2= new Healer('Grace',1, 'cure');
console.log(hero1);

const Bv= class{};
const tww = new Bv();
console.log(tww);


class Heros{
   constructor(name,level){
   this.name= name;
   this.level= level;
}
}
class Mage extends Hero{
   constructor(name,level,spell){
    super(name,level);
   this.spell= spell;
}
}
const heros2= new Mage('Mon',2, 'magic missile');
console.log(heros2);


const employees={
   boss:'Michael',
   secretary: 'Pam',
   sales:'Jim',
   accountant:'Oscar'
};
const keys=object.keys(employees);
console.log(employees)


const job={
   name: 'Barista',
   position: 'cashier',
   type: 'hourly',
   isAvailable: true,
   showDetails(){
      const accepting= this.isAvailable? 'is accepting applications':'is not currently accepting applications';

   }
}
let Barista= object.create(job);
Barista.position= 'Barista';
Barista.showDetails();
console.log(Barista)