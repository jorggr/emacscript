// ES9
// operador de reposo extrae propiedades de un objeto
const myobj = {
  name: "jorg",
  apellido: "garcia",
  edad: 28,
};

let { name, ...all } = myobj;

console.log(name);
console.log(all);

const secondobj = {
  ...myobj,
  country: "CDMX",
};

console.log(secondobj);

// promise finally
const promiseFinally = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Hello") : reject(new Error("Bye error"));
  });
};

promiseFinally()
  .then((response) => {
    console.log(response);
  })
  .catch((reject) => {
    console.log(reject);
  })
  .finally(() => {
    console.log("Finalizado");
  });

// regex
const regex_data = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const result = regex_data.exec("2021-04-20");
console.log(result); // resultado completo
console.log(result.length); // cantidad de items
console.log(`${result[0]} ${result[1]} ${result[2]} ${result[3]}`);
