/**
 * this in Objects
 * The this keyword refers to an object.
 * In JS,t this is used to access the object that is calling a method
 */

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 15,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());
