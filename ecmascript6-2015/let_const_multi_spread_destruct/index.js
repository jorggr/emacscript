// es6 -> literal template + multiline
let sentence = `Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido 
del texto de un sitio mientras
 que mira su diseño. 
 El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras`;

console.log(sentence);

// destructuracion

let person = {
  thename: "jorg",
  age: 28,
  country: "MX",
};

let { thename } = person;

console.log(`${thename}`);

// spread operator -> join arrays

let people = ["jorge", "cristina", "rosalba"];
let animals = ["anubis", "silvestre", "happy"];

let friends = ["fachi", ...people, ...animals];

console.log(friends);

// let -> disponible en su scope / dentro del codigo donde es llamado
// var -> disponible glogal

{
  var my_global = "Global var";
}

{
  let new_global = "Global let inside scope";
  // only accesed inside scope
  console.log(new_global);
}

console.log(my_global);
//// non accesible outside context or scope
console.log(new_global);

// const -> values never changue
const no_changue = "No changue";

no_changue = "Cant Changue";

console.log(no_changue);
