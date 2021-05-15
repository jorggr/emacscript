// junio 2017
// transform to array bidimensional
const data = {
  front: "Oscar",
  backend: "Richard",
  design: "Mayuko",
};

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);

// [
//   ["front", "Oscar"],
//   ["backend", "Richard"],
//   ["design", "Mayuko"],
// ];

// ----
// store values into array
const dictionary_data = {
  front: "Oscar",
  backend: "Richard",
  design: "Mayuko",
};

const values = Object.values(dictionary_data);
console.log(values);
// ["Oscar", "Richard", "Mayuko"];

//
const string = "Mundo";
const length_first_str = string.length; // 5
const add_start_str = "Hola";
const length_second_str = add_start_str.length;
const max_length = length_first_str + length_second_str;

const add_start_pad = string.padStart(max_length, add_start_str);
const add_end_pad = string.padEnd(max_length, add_start_str);

console.log(add_start_pad);
console.log(add_end_pad);

// async await
// funcion -> promesa -> async / await
// sin async
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("No problem"), 3000)
      : reject(new Error("Error"));
  });
};
// con async
const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
