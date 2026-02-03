"use strict"

// exemple

// let missatge;

// missatge = prompt("Introdueix el que vulguis")

// for (let i = 0; i < missatge.length; i++){
//     alert(missatge.charAt(i))
// }

// ex01

// for (let i = 25; i <= 100; i += 5){
//     alert(i)
// }

// ex02

// Múltiples de 2, 3 o 5
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) alert(i + " és múltiple de 2");
//     if (i % 3 == 0) alert(i + " és múltiple de 3");
//     if (i % 5 == 0) alert(i + " és múltiple de 5");
// }

// Múltiples de 2, 3 i 5 (de tots)
//  for (let i = 1; i <= 100; i++) {
//      if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0)
//          alert(i + " és múltiple de 2, 3 i 5");
// }

// ex03

// for (let i = 10; i >= 0; i--){
//     alert(i)
// }

// ex04

// let num = parseInt(prompt("Introdueix un numero enter"));

// for (let i = 1; i <= 10; i++){
//     alert(num + " x " + i + " = " + (num * i))
// }

// ex05

// let nummin = parseInt(prompt("Introdueix numero minim"));
// let nummax = parseInt(prompt("Introdueix numero maxim"));
// let maxintents = parseInt(prompt("En quants intents ho vols fer?"));
// let num = parseInt(Math.random() * (nummax - nummin + 1) + nummin);
// let intents = 0
// let guess
// for (let i = 0; i < maxintents; i++){
//     guess = parseInt(prompt("Adivina el numero"))
//     intents++;
//     if (guess > num) alert("Mes petit")
//     else if (guess < num) alert("Mes gran")
//     else break;
// }
// if (guess == num) alert("Has encertat en " + intents + " intents");
// else alert("Se t'han acabat els intents \n" + "El numero era " + num);

// ex06

// let missatge = "";
// let numero = parseInt(prompt("Quants asteriscos vols?"))

// for (let i = 0; i < numero; i++){
//     missatge += "*"
// }
// alert(missatge)

// ex07
// let missatge = "";
// let numero = parseInt(prompt("Quants asteriscos vols?"))

// for (let i = 0; i < numero; i++){
//     for (let j = 0; j <= i; j++){
//         missatge += "*"
//     }
//     missatge += "\n"
// }
// alert(missatge)

// ex08

// let m = ""
// Incrementant en 1
// for (let x = -5; x <= 5; x++) {
//     m += "(" + x + " | " + ((Math.pow((x-2)/5,2)+4)).toFixed(1) + ")" + " ";
// }
// alert(m)
// Incrementant en 0,5
// for (let x = -5; x <= 5; x += 0.5) {
//     m += "(" + x + " | " + ((Math.pow((x-2)/5,2)+4)).toFixed(1) + ")" + " ";
// }
// alert(m)

// ex09

// let n1 = 8, n2 = 14, n3 = 5;

// for (let i = 0; i < 2; i++) {
//     let linea = "";
//     for (let j = 0; j < n1; j++) {
//         linea += "#";
//     }
//     console.log(linea);
// }

// for (let i = 0; i < 2; i++) {
//     let linea = "";
//     for (let j = 0; j < n2; j++) {
//         linea += "o";
//     }
//     console.log(linea);
// }

// for (let i = 0; i < 2; i++) {
//     let linea = "";
//     for (let j = 0; j < n3; j++) {
//         linea += "X";
//     }
//     console.log(linea);
// }

// let n1 = 8, n2 = 12, n3 = 5;
// let max, linea;


// if (n1 >= n2 && n1 >= n3) max = n1;
// else if (n2 >= n1 && n2 >= n3) max = n2;
// else max = n3;

// for (let i = 0; i < max; i++) {
//     if (i < n1) linea = "##### ";
//     else linea = "";

//     if (i < n2) linea ="OOOOO ";
//     else linea = "";

//     if (i < n3) linea = "XXXXX ";
//     else linea = "";

//     console.log(linea);
// }

// random01

// let n
// do {
// n = parseInt(prompt())
// let m
//     if (n == 0) break;
//     else if (n % 2 == 0) m = "DERECHA"
//     else m = "IZQUIERDA"
//     console.log(m)
// } while (n != 0)
   
//random02

let s
for (let i = 4; i > 0; i--){
    let n = parseInt(prompt())
    let m = parseInt(prompt())
    if (n - m > 0) s = "SI"
    else s = "NO"
    console.log(s)
} 