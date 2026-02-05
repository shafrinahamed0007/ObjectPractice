/**
 * Properties are key:value Pairs
 * A JavaScript object is a collection of properties. Properties can be changed, added and deleted
 */

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

// Break notation is useful when the property name is stored in a variable
let n1 = "firstName";
let n2 = "lastName";

let name = person[n1] + " " + person[n2];
console.log(name);

// Changing Property -- You can change the value of a property
person.age = 10;
console.log(person);

// Adding New Properties -- You can add a new property by simply giving value.
person.nationality = "English";
console.log(person);

// Delete Properties -- The delete keyword deletes a property from an object
delete person.age;
console.log(person);

// Check if a property exists -- use the in operator to check if a property exists in an object

let result = "firstName" in person;
console.log(result);

// Nested Object -- Property values in  an object can be other objects.

myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

console.log(myObj.myCars.car2);

let p1 = "myCars";
let p2 = "car3";

let find = myObj[p1][p2];
console.log(find);
