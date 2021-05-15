class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sumar(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;

    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();

console.log(calc.sumar(1, 2));

// import module

import { moduleExport } from "./module";

console.log(moduleExport());

// generator
function* myGenerator() {
  if (true) {
    yield "First Call";
  }

  if (true) {
    yield "Second Call";
  }
}

const runGenerator = myGenerator();
// Calll first yield
console.log(runGenerator.next().value);
// Call second yield
console.log(runGenerator.next().value);
// Call third yield
console.log(runGenerator.next().value);
// EMACSCRIPT 6 - 2015
