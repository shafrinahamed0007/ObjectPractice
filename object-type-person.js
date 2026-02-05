/**
 * Object Constructor Functions
 * Sometimes we need to create many objects of the same type
 * To create an object type web us an object constructor function
 * It is considered good practice to name constructor functions with an upper-case first letter
 */

function Person(first, last, age, eye) {
  this.firstName =first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const mySelf = new Person("John", "Doe", 50, "black");
console.log("My name is: " + mySelf.firstName + " " + mySelf.lastName + " " + "I'm " + " "+ mySelf.age + " " + "years old");


// Now we can use "new Person()" to create many Person objects:

const myName = new Person("John", "Doe", 50, "blue");
const myFriend = new Person("Sally", "Rally", 48, "black");

// adding a property to an object

myName.nationality = "English";
console.log("I am" + " " + myName.nationality);

// I can not add a new property to an object constructor
Person.nationality = "Na";

// To add a new property, you must add it to the constructor function prototype

Person.prototype.fullName = "Shafrin Ahamed";

console.log(myName.fullName);
console.log(myFriend.fullName);
