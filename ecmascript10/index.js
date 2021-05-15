let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
//aplanando un array
console.log(array.flat(0));
// aplanando a profundidad 1
console.log(array.flat(1));
// aplanando a profundidad 2
console.log(array.flat(2));

let newarr = [1, 2, 3, 4, 5];

// 1,1*2,2,2*2,3,3*2,4,4*2,5,5*2
console.log(newarr.flatMap((value) => [value, value * 2]));
// quitando espacios al inicio del str
let str_with_space = "   jorge  garcia      reyes  ";
console.log(str_with_space.trimStart());
// al final
console.log(str_with_space.trimEnd());

//
try {
} catch (error) {}

// array to obj -> from entries
let entry = [
  ["llave", "valor"],
  ["key", "value"],
];
let entry_to_object = Object.fromEntries(entry);
console.log(entry_to_object);

// symnbol
let mySymbol = `jorge`;
let symbol = Symbol(mySymbol);

console.log(symbol.description);
//
