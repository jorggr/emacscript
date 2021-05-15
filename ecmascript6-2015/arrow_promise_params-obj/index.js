let name = "jorge";
let age = 18;

// es5
let obj = {
  name: name,
  age: age,
};

// es6
let newObj = {
  name,
  age,
};
console.log(newObj);

// arrow function
// no cuenta con this

const names = [
  { name: "jorge", age: 28 },
  { name: "cristina", age: 25 },
];

let listOfNames = names.map((item) => console.log(item.name));

const example1 = (item1, item2, item3) => {
  //// do something
};

const example2 = (item) => {
  //// do something
};

const example3 = (num) => num * num;

// Promise -> asyncronismo -> ejecuta elemento por elemento, permite evitar callback hell

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Resolve Succesful");
    }
    reject("Something Wrong!!");
  });
};

helloPromise()
  // respuesta
  .then((response) => console.log(response))
  // obtener error
  .catch((error) => console.log(error));
