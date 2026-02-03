// let notes = [];
// PreguntarNotes()


// function PreguntarNotes() {
//     for (let i = 0; i < 6; i++) {
//         let nota = parseInt(prompt("Introdueix una nota"));
//         notes.push(nota);
//     }
//     ComprovarNotes()
// }
// function ComprovarNotes(){
//     let notaMinima = Math.min(...notes);
//     if (notaMinima < 5) console.log("Suspes")
//         else (CalcularMitjana())
    
// }
// function CalcularMitjana(){
//     let notestotal = 0
//     for (let i = 0; i < notes.length; i++) {
//     notestotal += notes[i]; 
//     }
//     let mitjana = notestotal / notes.length;
//     console.log("Mitjana : " + mitjana)
// }

let repeticions = parseInt(prompt("Introdueix quantitat"))
let primerNum = parseInt(prompt("Introdueix primer numero"))

function creaArray(N, V) {

  // creem l'array i posem V com a primer element
  let array = [V];

  // omplim la resta amb números enters aleatoris (per exemple entre 0 i 100)
  for (let i = 1; i < N; i++) {
    //let numero = Math.floor(Math.random() * 101); // numero aleatori entre 0 i 100
    let numero = parseInt(prompt("Introdueix un numero")) // numero introduit per l'usuari
    array.push(numero);
  }

  return array;
}

function mostraArray(array, saltsDeLinia = true, separador = " ") {

  if (saltsDeLinia) {
    // mostra cada element en una línia
    //array.forEach(digit => console.log(digit)); // Amb forEach
    for (let element of array) {
      console.log(element);             // Amb for --- of
    }
  } else {
    // mostra tots en una sola línia separats pel separador
    console.log(array.join(separador));
  }
}

let nums = creaArray(repeticions, primerNum);

// mostra un per línia:
mostraArray(nums, true);

// mostra tots en una sola línia separats per espais:
mostraArray(nums, false);

// mostra tots en una sola línia separats per comes:
mostraArray(nums, false, ", ");