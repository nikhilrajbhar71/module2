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
