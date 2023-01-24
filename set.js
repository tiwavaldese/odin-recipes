alert

const set = new Set(['Beethoven','Mozart', 'Chopin', 'Chopin']);
console.log(set)
const arr1= [...set];
console.log(arr1)

console.log(set.size)
console.log(set.delete('Beethoven'));
console.log(set.size)
console.log(set.has('Beethoven'));
console.log(set.clear());
console.log(set.size);


const set1 = new Set([1,2, 3, 4]);
console.log(set1.values());


const set2 = new Set(['hey','hi', 'hello', 'good day']);
set2.forEach((value) => console.log(value));

for(const value of set2) {
    console.log(value)
}