alert

const map= new Map([

['firstname','Luke'],
['lastname','Skywalker'],
['occupation','Jedi Knight'],
] )
console.log(map);


const map1= new Map([
    ['key1','value1'],['key2','value2']
]);console.log(map1);

const map2= new Map()
{
  map2.set('firstname','Luke');
map2.set('lastname', 'Skywalker');
map2.set('occupation','Jedi Knight');
}
const arr=Array.from(map2);
console.log(map2);
console.log(arr);


const map3= new Map()
{
  map3.set('1','string one');
map3.set(1, 'This will be overwritten');
map3.set(1,'number one');
map3.set(true,'A Boolean');
}console.log(map3);

const obj= { 1: 'one'}
console.log(obj[1] === obj['1'])


const objaskey= {foo: 'bar'}
const obj1= {
    [objaskey]: 'what will happen'
}
console.log(obj1)


const objAskey= {foo: 'bar'};
const map4= new Map()

    map4.set(objAskey, 'what will happen');

console.log(map4);

const map5= new Map()
map5.set({},'one')
map5.set({},'two')
console.log(map5);

const obj2= {}
map5.set(obj,'one')
map5.set(obj,'two')
console.log(obj2);

const map6= new Map([
    ['animal', 'otter'],
    ['shape', 'triangle'],
    ['city', 'New York'],
    ['country', 'Bulgaria'],
]) 
console.log(map6.has('shark'));
console.log(map6.has('country'));

console.log(map6.get('country'));
console.log(map6.get('animal'));

console.log(map6.size);

console.log(map6.delete('city'));
console.log(map6);

console.log(map6.clear());
console.log(map6);

const map7= new Map([
    [1970, 'bell bottons'],
    [1980, 'leg warmers'],
[1990, 'flannel'],
])
console.log(map7.keys());
console.log(map7.values());
console.log(map7.entries());

map7.forEach((value,key) => {
console.log(`${key}:${value}`)
})

for (const [key,value] of map) {
    console.log(`${key}:${value}`);
}