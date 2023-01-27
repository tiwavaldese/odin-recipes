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


function*generatorFunction(){
   return 'hello, Generator!';
   
}const generator = generatorFunction();
console.log(generator)
console.log(generator.next());
console.log(generator);



function*generatorFunction(){
   yield 'Neo'
   yield 'Morpheus'
   yield 'Trinity'

return 'oracle'
   
}const generator1 = generatorFunction();
console.log(generator1);


console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());

const values1 = [...generator]
console.log(values1)


console.log(generator1);


for(const value of generator){
   console.log(value)
}


function*generatorFunction(){
   yield 'Mon'
   yield 'Morpheus'
   yield 'square'

}const generator2 = generatorFunction();

console.log(generator1.next());
console.log(generator1.return('There is no spoon!'));
console.log(generator1.next());


function*generatorFunction(){
   try{yield 'Mon'
   yield 'Morpheus'
 } catch (error){
   console.log(error)
 }

}const generator3 = generatorFunction();

console.log(generator3.next());
console.log(generator3.throw(new Error('Agent smith!')));



function*delegate(){
   yield 4
   yield 5
   yield 6

}

function*begin(){
   yield 1
   yield 2
   yield 3
yield*delegate()
}
const generator4 = begin();

for(const valuE of generator4){
   console.log(valuE);
}

function*increment() {
   let i = 0

   while (true){
      yield i++
   }
}
const counter= increment()
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())

function* fibonacci() {
   let prev= 0
   let next= 1

   yield prev
   yield next

   while(true){
   const newVal = next + prev

   yield newVal

   prev = next
   next = newVal

}
}
const fib = fibonacci()

for(let i = 0; i < 10; i++){
   console.log(fib.next().value)
}



function cube (x)
{
   console.log(x * x * x);
   
}
cube(10)

const cube1= x => {
   console.log(x*x*x);
}
cube1(10);


const cube2= x => {
   console.log(x*x*x);
}
cube2();


function cube(x) {
   if(typeof x === 'undefined') {
      x = 5
   }
   console.log(x * x * x)
}
cube()


function cube(x = 5) {
  
   console.log(x * x * x)
}
cube()


function cube(x = 5) {
   
   console.log(x * x * x)
}
cube(undefined)


const defaultNumber = (number= 42) => console.log(number)
const defaultString = (string = 'shark') => console.log(string)
const defaultBoolean = (number = true) => console.log(boolean)
const defaultObject = (object = {id: 7}) => console.log(object)
const defaultArray = (array = [1, 2, 3]) => console.log(array)
const defaultNull = (nullValue = null) => console.log(nullValue)


function sums(a= 1, b= 2){
   console.log(a + b);
}
sums()

function createUser( name, rank, userObj = {name, rank}) {
   console.log(userObj);
}
const uSer = createUser('Jean Luc', 'Captain');


function defaultFirst(a= 1, b){
   console.log(a + b);
}
defaultFirst(undefined,4);


function defaultLast(a, b = 3){
   console.log(a + b);
}
defaultLast(4);

function createNewElement(tag, text, classNames =[]){
   const el = document.createElement(tag)
   el.textcontent = text

   classNames.forEach(className => {
      el.classList.add(className)
   })
   console.log(el)
}
const greets = createNewElement('p', 'Hello!', ['greeting', 'active'])


function createNewElement(tag, text, classNames =[]){
   const el1 = document.createElement(tag)
   el1.textcontent = text

   classNames.forEach(className => {
      el1.classList.add(className)
   })
   console.log(el1)
}
const greets1 = createNewElement('p', 'Hello!' )


function getRandomNumber()
{
   console.log(Math.floor(Math.random() * 10))
}
function cube(x = getRandomNumber()){
   console.log(x * x * x)
}
cube();
cube()


function doesXEqualY(x = getRandomNumber(), y = Math.cbrt(cube(x))) {
   console.log(x === y)
}
doesXEqualY();


function outer(
   parameter = function inner() {
      console.log(100)
   }
){
   console.log(parameter())
}
outer()


Module.exports= function troubleshooting() {
   let Aa = 1;
   let Bb = 1;

   let resulT;
   resulT = "Aa" + "Bb";
   console.log(resulT);
}
module.exports= troubleshooting;


let nUmber= prompt('enter a number')
function nUmberChecker(){
   if (nUmber === 10){
      console.log(true)
   }
   else{
      console.log(false)
   }
}





const getUsers= async function(){
   const response= await fetch('http://jsonplaceholder.typicode.com/users')
   const json= await response.json()
   
   return json
   }
   getUsers().then(response => console.log(response))
   



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