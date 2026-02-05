// This code example assigns many values (Fiat, 500, white) to an object named car:

const car = {
  type: "Fiat",
  model: 500,
  color: "white",
};

// console.log("The cart type is:", car.type, ", model:", car.model, ", and color is:", car.color);

// I can also create an empty object, and add the properties later.

// create an object
const person = {};

// add properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 56;
person.eyeColor = "black";

// create a new JavaScript object using new Object():

const person1 = new Object({
  // properties and property values
});

/**
 * Object Properties: You can access object properties in two ways:
 *  1. Dot notation: objectName.propertyName
 *  2. Bracket notation: objectName["propertyName"]
 *
 */

// Object methods are function definitions stored as property values

const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log("Full Name: ", person2.fullName());