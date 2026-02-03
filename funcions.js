"use strict"

// let edat;

// introduirDades();
// let edat2 = processarDades(edat);
// mostrarRestultats();

// function introduirDades() {
//     //Codi per demanar dades
//     edat = prompt("Escriu edat")
// }

// function processarDades(e) {
//     //Codi per processar dades
//     const MAJOR = 18;
//     if (e >= MAJOR) e /= 2;
//     else e += 5;
//     return e;
// }

// function mostrarRestultats() {
//     //Codi per mostrar dades
//     console.log("Tens " + edat + " anys")
//     console.log("El doble de la teva edat es " + edat2 + " anys")
// }

// mostrarMenu();

// function mostrarMenu() {
// 	let opcio;

// 	do {
		
// 		console.log("===== MENÚ PRINCIPAL =====");
// 		console.log("Exercici 1");
// 		console.log("Exercici 2");
// 		console.log("Exercici 3");
// 		console.log("Exercici 4");
// 		console.log("0. Sortir");
// 		console.log("==========================");
		

// 		opcio = prompt("Introdueix una opció:\nExercici 1\nExercici 2\nExercici 3\nExercici 4\nSortir 0");

//         switch (opcio) {
//     case "1" :
//         exercici1()
//         break;
//     case "2" :
//         exercici2()
//         break;
//     case "3" :
//         exercici3()
//         break;
//     case "4" :
//         exercici4()
//         break;
//     case "0" :
//         alert("sortint")
//         break;
//     default :
//         alert("Opcio incorecta")
// }


// 	} while (opcio !== "0");
// }

// function exercici1() {
//     const CONTRASENYA = 1234;
//     let contrasenya;
//         contrasenya = prompt("Introdueix la contrasenya");
//         contrasenya = parseInt(contrasenya);
//     if (contrasenya == CONTRASENYA) {alert("Correcte")}   
//     else { alert("Incorrecte")}
// }
// function exercici2() {
//     let nota2;
// nota2 = parseInt(prompt("introdueix la nota"));
//     if (nota2 >=0 && nota2 <=10){
//         if (nota2 <3) alert("Has de millorar molt!")
//         else if (nota2 >=3 && nota2 <5) alert("Encara et falta una mica")
//         else if (nota2 >=5 && nota2 <7) alert("No vas malament")
//         else if (nota2 >=7 && nota2 <9) alert("Molt be")
//         else if (nota2 >=9) alert("Exelent")
//     } else alert("La nota introduida no es correcte")
// }
// function exercici3() {
//     let temperatura;
//     let humitat;

//     temperatura = parseInt(prompt("Introdueix la temperatura"));
//     humitat = parseInt(prompt("Introdueix la humitat"));

//     if (temperatura >5 || temperatura <25 || humitat <40 || humitat >80){ 
//         alert("ALERTA! temperatura o humitat fora dels marges adequats")
//     }
// }
// function exercici4() {
//     let edat = prompt("Introdueix la teva edat")
//     edat = parseFloat(edat.replace("," , "."))

//     if (edat >= 18 && edat < 80) alert("Pots conduir un cotxe")
//     if (! (edat >= 16 && edat <= 67 )) alert("No estas en edat de treballar")
//     if (edat < 3) alert("Has d'anar a la guarderia")
//     if (edat >= 18 && edat <= 24) alert("Pots estudiar")
// }

// ex01

// let lletra = lletraRandom(prompt("Escriu una lletra"), prompt("Escriu una lletra"));

// function lletraRandom(charIni, charFin) {
//     let l = Math.floor(Math.random() * (charFin.charCodeAt(0) - charIni.charCodeAt(0) + 1) + charIni.charCodeAt(0));
//     return String.fromCharCode(l);
// }
// console.log(lletra)

// ex06

// let numMax = prompt("Introdueix num maxim");
// let numMin = promp("Introdueix num minim");
// let num2 = numMinMax(numMin, numMax);
// let num = preguntaNum("Introdueix numero entre " + numMin + " i " + numMax);

//  preguntaNum();

// function preguntaNum(pregunta) {
//     let r = parseInt(prompt(pregunta));
//     while (isNaN(r)) {
//         alert("No has introduit cap numero");
//         r = parseInt(prompt(pregunta));
//     }
//     numMinMax();
// }


// function numMinMax(min, max) {
//     let r = preguntaNum(pregunta);
//     while (r < min || r > max) {
//         alert("El valor ha d'estar entre " + min + " i " + max);
//         r = preguntaNum(pregunta);
//     }
//     return r;
// }
// console.log(num2)

// ex 01 (funcions parametritzades)

// let inputsegons = parseInt(prompt("Introdueix segons"));
// let formatfinal = hhmmss(inputsegons);
// console.log(formatfinal);

// function hhmmss(inputsegons){

//     let hores = Math.floor(inputsegons / 3600);            // 1 hora = 3600 segons
//     let minuts = Math.floor((inputsegons % 3600) / 60);   // minuts restants
//     let segons = inputsegons % 60;                        // segons restants
//     // Fer que si el numero es nomes 1 posi el 0 davant
//     let hh = String(hores).padStart(2, '0');
//     let mm = String(minuts).padStart(2, '0');
//     let ss = String(segons).padStart(2, '0');

//     // Return formatted string
//     return  `${hh}:${mm}:${ss}`;
// }

// ex02 (funcions parameritzades)

// let retorn;
// let any = prompt("Introdueix un any");
// any = parseFloat(any.replace(",", "."));
// calcul(any);
// missatge(retorn);

// function calcul(any){
//  if (any % 400 == 0) retorn = true;
//  else if (any % 100 == 0) retorn = false;
//  else if (any % 4 == 0) retorn = true;
//  else  retorn = false;
 
// }
// function missatge(retorn){
//     if (retorn == false) alert("L'any " + any + " NO es de traspas");
//     else if (retorn == true) alert ("L'any " + any + " SI es de traspas");
// }

// ex03 (funcions parametritzades)

// let diaN = parseInt(prompt("Introdueix un numero del 1 al 7"))
// let diaM;
// calcul()
// missatge()

// function calcul(){
// switch (diaN) {
//     case 1 :
//         diaM = "Dilluns"
//         break;
//     case 2 :
//         diaM = "Dimarts"
//         break;
//     case 3 :
//         diaM = "Dimecres"
//         break;
//     case 4 :
//         diaM = "Dijous"
//         break;
//     case 5 :
//         diaM = "Divendres"
//         break;
//     case 6 :
//         diaM = "Dissabte"
//         break;
//     case 7 :
//         diaM = "Diumenge"
//         break;
//     default :
//      diaM = "El valor ha de ser entre 1 i 7"
// }
// } 
// function missatge(){
//     alert(diaM)
// }

// ex04 (funcions parametritzades)

// let mes = parseInt(prompt("Introdueix el numero de mes"));
// let any = parseInt(prompt("introdueix l'any"));
// let message;
// let retorn;
// calcul();
// missatge(message);


// function calcul(){
// if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) message = 31;
// else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) message = 30;
// else if (mes == 2){
//     traspas(any)
//     if (retorn == true) message = 29;
//     else if (retorn == false) message = 28;
//     }
// else message = "El mes ha de ser entre 1 i 12"
// }

// function traspas(any){
//  if (any % 400 == 0) retorn = true;
//  else if (any % 100 == 0) retorn = false;
//  else if (any % 4 == 0) retorn = true;
//  else  retorn = false;
// }

// function missatge(message){
//     alert(message);
// }

// mes exercicis de funcions ex04

// let nom = prompt("Introdueix el teu nom");
// let lastLetter = nom.charAt(nom.length - 1).toLowerCase();
// let m;
// asignar()
// missatge()

// function asignar(){
//     if (lastLetter == "a") m = " el Terrible"
//     else if (lastLetter == "o") m = " el Temerari"
//     else m = " el Corsari"
// }
// function missatge(){
//     alert(nom + m)
// }

// mes exercicis de funcions ex01

let text = prompt("Introdueix un text");
let nouText = cambiarVocals(text);

console.log("Text modificat:", nouText);
alert("Text modificat: " + nouText);

function cambiarVocals(text) {
  let resultat = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i]; // asignar char a cada lletra mentre vagi avancant el bule for
    let charMinus = char.toLowerCase(); // cambiar les lletres a minuscula per fer les comprovacions i assignar-ho charMinus

    // Comprovar si es vocal i anar cambiant a "_" i si no es vocal deixa la mateixa lletra
    if (
      charMinus == "a" ||
      charMinus == "e" ||
      charMinus == "i" ||
      charMinus == "o" ||
      charMinus == "u"
    ) {
      resultat += "_";
    } else {
      resultat += char;
    }
  }
  return resultat;
}


