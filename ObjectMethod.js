/**
 * Methods are actions that can be performed on objects.
 * Method are function stored as property values.
 */

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  getId: function () {
    return this.id;
  },
};
console.log(person.fullName());
console.log(person.getId());

/**
 * Accessing Object Methods
 *  To call an object method, add parentheses():
 *  without parentheses you get the function itself
 */

let name = person.fullName();
let name1 = person.fullName;
console.log(name);
console.log(name1);

// Adding a method to an object and adding a JS Method

person.car = function(){
    let brand = "Bmw";
    let year = "2010";
    let total = brand + " " + year;

    return total.toUpperCase();
}
console.log(person.car());



