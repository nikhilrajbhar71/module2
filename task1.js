// this prints window object
console.log(this);

// if it is inside a object, it will refer to a oject, inside which it is defined
const person = {
  name: "John",
  age: 30,
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.sayHello();

// closure

function outerFunction() {
  let outerVariable = "outer function variable";
  return function innerFunction() {
    console.log(outerVariable);
  };
}
let innerF = outerFunction();

innerF();




// class
class Animal {
  constructor() {
    console.log("constructor called");
  }
  Walk() {
    console.log("Animal is walking");
  }
}

class Dog extends Animal {
  constructor() {
    super();
    console.log("Dog constructor called");
  }
}

let dog = new Dog();

dog.Walk();
