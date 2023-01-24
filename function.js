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

const America= {
   name:'The united states of America',
   yearFounded: 1776,
   describe()
   
   {
      console.log(`${this.name} was founded in ${this.yearFounded}.`)
   }
}  
America.describe()


const america= {
   name:'The united states of America',
   yearFounded: 1776,
   details:{
      symbol: 'eagle',
      currency:'USD',
      printDetails()
      {
         console.log(`This symbol is the ${this.symbol} and the currency is ${this.currency}.`)
      },
   },
}  
america.details.printDetails()

   
function Country(name,yearFounded){
   this.name= name;
   this.yearFounded=yearFounded;

   this.describe= function(){
      console.log(`${this.name} was founded in ${this.yearFounded}.`)
   }
}
const america1= new Country('The united states of America', 1776)
america1.describe()


class Country1{
   constructor(name,yearFounded){
      this.name = name;
      this.yearFounded= yearFounded;
   }
   describe(){
      console.log(`${this.name} was founded in ${this.yearFounded}.`)
   }
}
const america2= new Country1('The united states of America', 1776)

america2.describe()


const button = document.createElement('button')
button.textcontent = 'click me';
document.body.append(button);

class Display {
   constructor() {
      this.buttonText = 'New text'
   

button.addEventListener('click',event => 
{
   event.target.textcontent = this.buttonText
   
})
}
}
new Display();


const book ={
   title: 'Brave New World',
   author: 'Aldou Huxley',
}
function summary()
{
   console.log(`${this.title} was written by ${this.author}`);
}
summary.call(book);
//or:
summary.apply(book);



const book1 ={
   title: 'Brave New World',
   author: 'Aldou Huxley',
}
function longersummary(genre,year)
{
   console.log
   (`${this.title} was written by ${this.author}. It is a  ${genre} novel written by ${year}`);
}
longersummary.call(book1, 'dystopian', 1932);
//or:
longersummary.apply(book1,['dystopian',1932]);
const BraveNewWorldsummary = summary.bind(book)
BraveNewWorldsummary()
const book2 ={
   title: '1984',
   author: 'George Orwell'
}
BraveNewWorldsummary(book2)
BraveNewWorldsummary()


const whoAmi = {
name: 'Leslie Knope',
regularFunction:  function(){
   console.log(this.name)
},
arrowFunction: ()=> {
   console.log(this.name)
},
}
whoAmi.regularFunction()
whoAmi.arrowFunction()



const keys=object.keys(employees);
console.log('keys',keys);
const values=object.values(employees);
console.log('values',values);
const entries=object.entries(employees);
console.log('entries',entries);



const job={
   name: 'Barista',
   position: 'cashier',
   type: 'hourly',
   isAvailable: true,
   showDetails(){
      const accepting= this.isAvailable? 'is accepting applications':'is not currently accepting applications';

   }
}
let Barista= object.Barista(job);
Barista.position= 'Barista';
Barista.showDetails();
console.log(Barista)