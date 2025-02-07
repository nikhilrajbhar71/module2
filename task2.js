// map example
let animals = ["monkey", "cat", "bat", "dog", "cow"];

let modifiedAnimals = animals.map((animal) => {
  return animal.toUpperCase();
});
console.log(modifiedAnimals);

// filter example

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);

// reduce example

const temp = [1, 2, 3, 4, 5];

const totalSum = temp.reduce((sum, currentValue) => {
  return sum + currentValue;
});

console.log(totalSum); // Output: 15

// Promise

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("hello");
    resolve(5000);
  }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("world");
    reject("error");
  }, 1000);
});

let promise3 = new Promise((resolve, reject) => {
  reject(new Error("error"));
});

promise.then((value) => {
  console.log("resolved with value: " + value);
});

promise2
  .then((value) => {
    console.log("resolved with value: " + value);
  })
  .catch((error) => {
    console.error("promise2 rejected with error: " + error);
  });

promise3.catch((error) => {
  console.error("rejected with error: " + error);
});

// fetch api and this is also an example of promise chaining

let q = fetch("http://numbersapi.com/random/math?json");

q.then((response) => {
  return response.json();
}).then((response) => {
  console.log("response: " + JSON.stringify(response));
});
