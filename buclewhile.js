"use strict";

// ex01

// const CONTRASENYA=1234
// let resultat
// let intents = 3

// resultat = prompt("Introdueix la contrasenya");
// --intents;

// // while (resultat != CONTRASENYA && intents > 0) {
// //     alert("Contrasenya incorrecta. Et queden " + intents + " intents.");
// //     resultat = prompt("Introdueix la contrasenya");
// //     --intents;
// // }
// // if (resultat == CONTRASENYA) alert("Contrasenya correcte")
// //     else alert("Contrasenya incorrecte, s'han acabat els intents")
// do {
//     alert("Contrasenya incorrecta. Et queden " + intents + " intents.");
//     resultat = prompt("Introdueix la contrasenya");
//     --intents;
// } while (resultat != CONTRASENYA && intents > 0)
// if (resultat == CONTRASENYA) alert("Contrasenya correcte")
//     else alert("Contrasenya incorrecte, s'han acabat els intents")


// ex02

// let resposta;
// let color = 1
// do {
//     switch (color) {
//         case 1:
//             alert("Semafor verd");
//             break;
//         case 2:
//             alert("Semafor groc");
//             break;
//         case 3:
//             alert("Semafor vermell");
//             break;
//     }
//     resposta = prompt("Accio semafor").trim().toUpperCase()
//     if (resposta == "CANVI") {
//         ++estat;
//         if (estat > 3) estat = 1;
//     } else estat = -1
// } while (estat != -1)
// alert("Programa finalitzat")

// ex03

// let resposta, mesGran, mesPetit;

// resposta = parseInt(prompt("Introdueix un número positiu (0 per acabar)"));
// mesGran = resposta;
// mesPetit = resposta;

// while(resposta != 0) {
//     resposta = parseInt(prompt("Introdueix un número positiu (0 per acabar)"));
//     if (resposta != 0) {
//         if (resposta > mesGran) mesGran = resposta;
//         if (resposta < mesPetit) mesPetit = resposta;
//     }
// }

// if (mesGran == 0) {
//     alert("No has introduït cap número");
// } else {
//     alert("El número més gran és " + mesGran);
//     alert("El número més petit és " + mesPetit);
// }

// // ex04

// let num, factorial;

// num = parseInt(prompt("Introdueix un número enter més gran que 0"));

// factorial = num;

// while (num > 1) {
//     --num;
//     factorial *= num;
// }

// alert("El factorial és " + factorial);

// // ex05

// let num, resposta, intents = 0;

// num = (int)(Math.random() * 100 + 1);
// do {
//     resposta = parseInt(prompt("Introdueix un número entre 1 i 100"));

//     ++intents;

//     if (num > resposta) {
//         alert("És més gran");
//     } else if (num < resposta) {
//         alert("És més petit");
//     }
// } while (resposta != num);

// alert("Has encertat en " + intents + " intents");

// ex06

// let num, operacions = 0;

// num = parseInt(prompt("Introdueix un número entre 1 i 100"));

// while (num != 1) {
//     if (num % 2 == 0) {
//         num /= 2;
//     } else {
//         num = num * 3 + 1;
//     }
//     alert(num);
//     ++operacions;
// }

// alert("Operacions: " + operacions);

// ex07

let nota, suspensos = 0, total = 0, numNotes = 0;

do {
    nota = parseInt(prompt("Introdueix una nota entre 1 i 10 (0 per acabar)"));

    if (nota > 0 && nota <= 10) {
        total += nota;
        ++numNotes;
        if (nota < 5) ++suspensos;
    } else{
        if (nota != 0) alert("La nota és incorrecta");
    }
} while (nota != 0);

if (numNotes > 0) {
    alert("Suspensos: " + suspensos);
    alert("Mitjana: " + total / numNotes);
} else {
    alert("No has introduït cap nota");
}