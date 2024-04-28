/**
 * MAP VS OBJECT
 */


// inint map (set)
/*
const user1 = new Map();
user1.set('id', 1);
user1.set('name', 'John');

// recuperer le valeur avec son clé
console.log(user1.get('id'));

// son iteration 
let iterator = user1.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);


// map vs object
let userIDs = new Map();
let userUN = {name: 'John'}, userDeux = {name: 'Murray'}, userTrois = {name: 'Jane'};
userIDs.set(userUN, 1) .set(userDeux, 2) .set(userTrois, 3);
console.log(userIDs);
for (let [name,id] of userIDs) {
    console.log(name);
    console.log(id)
}

//To convert an object to a map, we can use the Object.entries() method.
const obj = {
  'name': 'John',
  'id': 1,
}
const map = new Map(Object.entries(obj));
console.log(map.get('name')) */


// comparaison
let obje = {}, maps = new Map();
let us = ["John", "Murray", "Jane", "Jane", "Anne", "John", "Murray", "Jane", "Jane", "Anne"];

for (let i = 0; i < us.length; i++) {
  obje[i] = us[i];
  maps.set(i, us[i]);

}
console.log(obje)
console.log(maps);

let result;

console.time('Object'); 
result = obje.hasOwnProperty("John"); 
console.log(result);
console.timeEnd('Object');

console.time('Map'); 
result = maps.has("Anne");
console.log(result); 
console.timeEnd('Map');