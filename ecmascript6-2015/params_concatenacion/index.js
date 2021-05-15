function newFunction(name, age, country) {
  var name = name || "jorge";
  var age = age || 28;
  var country = country || "Mexico";
  console.log(name, age, country);
}
// es6 -> default params
function newFunctionTwo(name = "jorge", age = 28, country = "MX") {
  console.log(name, age, country);
}

// es6 -> default params + template literals
function newFunctionThree(name = "jorge", age = 28, country = "MX") {
  let str_template_literal = `${name} ${age} ${country}`;
  console.log(str_template_literal);
}

newFunction("", 25, "MX");
newFunctionTwo("Cristina", 25, "MX");
newFunctionThree("Rosalba", 25, "MX");
