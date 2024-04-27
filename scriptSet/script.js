/**
 * ENSEMBLE VS ARRAY
 */

/*let events = new Set();
let event1 = {
    type:"concert",
    day:"Saturday"
};
let event2 = {
    type:"book launch",
    day:"Wednesday"
};
let event3 = {
    type:"conference",
    day:"Thursday"
};
let event4 = {
    type:"meet up",
    day:"Monday"
};
//Let's add each event to the set
events.add(event1);
events.add(event2);
events.add(event3);
events.add(event4);


for (let item of events.values()) { // naviger
    console.log(item)
}
events.delete(event2); // supprimer un ensemble
console.log(events.has(event2)); // savoir si un valeur est de l'ensemble

for (let value of events) { //naviger
    console.log(value)
}
 
events.forEach((event,events) =>{ //naviger
    console.log(event);
})

// convertir ensemble en tableau
let set = new Set([9, 15, "a string", {"objectKey": "objectValue"}]);
let arr = [...set]; // destructuring
console.log(arr); // tableau
console.log(set); // ensemble

// convertir tableau en ensemble
let arr2 = [9, 15, "a string", {"objectKey": "objectValue"}];
let arr2converted = [...new Set(arr2)]; // restructuring
console.log(arr2converted); // tableau

// Method 1
let users = ["John", "Murray", "Jane", "Jane", "Anne"];
function unique(users) {
        return Array.from(new Set(users));
}
console.log(unique(users));

// Method 2
let esmbl = new Set(users);
let arrFromSet = [...set];
console.log(arrFromSet);

// Ajouter des utlisateur dans un tableau et ensemble
let array = [], ens = new Set();
let use = ["John", "Murray", "Jane", "Jane", "Anne", "John", "Murray", "Jane", "Jane", "Anne"];

for (let i = 0; i < use.length; i++) {
  array.push(use[i]);
  ens.add(use[i]);
}

let result;
console.time('Array');
result = array.indexOf("Anne") !== 4;
console.timeEnd('Array');

console.time('set');
result = ens.has("Anne"); 
console.timeEnd('set');
*/

