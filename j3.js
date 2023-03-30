console.log("Question 1.\n For the given JSON iterate over all for loops (for, for in, , for of, for each).\n");

var obj = [
  { name: 'Max', age: 23 },
  { name: 'John', age: 20 },
  { name: 'Caley', age: 18 }
];

console.log("Iterating JSON using 'for' loop.")

for(i=0;i<obj.length;i++){
  console.log(obj[i]);
}

console.log("\nIterating JSON using 'for-in' loop.")
for (var key in obj) {
  console.log(obj[key]);
}

console.log("\nIterating JSON using 'for-of' loop.")
for (const value of Object.values(obj)) {
  console.log(value);
}

console.log("\nIterating JSON using 'for-Each' loop.")
obj.forEach(o => console.log(o));

console.log("\n\nQuestion 2.\n Create your owne resume Data in JSON format.\n");
var resume=[{"Name":"Parul Saini"},{"Qualification":"Graduation (Btech-ECE)"},{"Technical Knowledge": "Full Stack Development"},{"Current Job": "HCL"}];
resume.forEach(o => console.log(o));

