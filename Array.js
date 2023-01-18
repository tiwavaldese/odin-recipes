alert


const shopping=['bread','milk','cheese','humus','noodles'];
console.log(shopping);
console.log(shopping.length);
console.log(shopping.length-1)

const sequence=[1,2,3,4,5,8,13];
const random= ['tree',795,[0,1,2,3]];
console.log(sequence);
console.log(random);

const shopping1=['bread','milk','cheese','humus','noodles'];
shopping1[0]='tahini';
console.log(shopping1);

const shopping2=['bread','milk','cheese','humus','noodles'];

console.log(shopping2[1]);

const random1= ['tree',795,[0,1,2,3]];

console.log(random1[2]);

const birds = ['Parrot', 'Falcon', 'Owl'];
console.log(birds.indexOf('Falcon'));   
console.log(birds.indexOf('Rabbit')); 


const cities=['lonDon','manCHESTER','BIRmiNGHAM','LIVERpoOL'];
cities.push('cardiff')
console.log(cities);
cities.push('Brighton','Braford')
console.log(cities)

const cities1=['Manchester','Liverpool'];
cities1.unshift('Edinburgh');
console.log(cities1);

const cities2=['Manchester','Liverpool'];
cities2.pop();
console.log(cities2);


const cities3=['Manchester','Liverpool'];
cities3.shift();
console.log(cities3);

const cities4=['Manchester','Liverpool'];
const removedCity=cities4.pop();
console.log(removedCity);

const cities5=['Manchester','Liverpool'];
const removedCity1=cities5.shift();
console.log(removedCity1);





const cities6 = ['Manchester','Liverpool','Edinburgh','Carlisle'];
const index = cities6.indexOf('Liverpool');
if (index !== -1){
  cities6.splice(index, 2)
}
console.log(cities6);

const bird = ['Parrot', 'Falcon', 'Owl'];
for (const bird of birds) {

console.log(bird)
}

function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled);



const data= ['Manchester','London','Liverpool','Edinburgh','Carlisle','Totnes'];
data.length;
const commaseparated=data.join(',');
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data.length);
console.log(data.length-1);
console.log(commaseparated);

const dogNames = ['Rocket','Flash','Bella','Slugger'];
const commaSeparated=dogNames.join(',');
console.log(commaSeparated);

const text= 'some text with MIXED CAse LETters,';

console.log(text.toLowerCase());
console.log(text.toUpperCase());


