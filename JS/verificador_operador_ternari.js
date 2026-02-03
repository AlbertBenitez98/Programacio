"use strict";

// ex01

let nota = prompt("Introdueix la nota");
nota = parseFloat(nota.replace(".", ","));

if (nota >= 0 && nota <= 10){
    if (nota< 5) alert("Suspes");
    else alert("Aprovat")
} else {
    if (nota < 0) alert("La nota no pt ser inferior a 0")
    else alert("La nota no pot ser superior a 10")
}

// ex02

let dia;
dia = parseInt(prompt("Introdueix dia de la setmana (1-7"));

if (dia > 0 && dia <=7){
    if (dia == 1) alert("Dilluns")
    else if (dia == 2) alert("Dimarts")
    else if (dia == 3) alert("Dimecres")
    else if (dia == 4) alert("Dijous")
    else if (dia == 5) alert("Divendres")
    else if (dia == 6) alert("Dissabte")
    else if (dia == 7) alert("Diumenge")
} else alert("El dia ha de ser entre 1 i 7")

// ex03

let temperatura;
let humitat;

temperatura = parseInt(prompt("Introdueix la temperatura"));
humitat = parseInt(prompt("Introdueix la humitat"));

if (temperatura >5 || temperatura <25 || humitat <40 || humitat >80){ 
    alert("ALERTA! temperatura o humitat fora dels marges adequats")
}

// ex04

let nota2;
nota2 = parseInt(prompt("introdueix la nota"));

if (nota2 >=0 && nota2 <=10){
    if (nota2 <3) alert("Has de millorar molt!")
    else if (nota2 >=3 && nota2 <5) alert("Encara et falta una mica")
    else if (nota2 >=5 && nota2 <7) alert("No vas malament")
    else if (nota2 >=7 && nota2 <9) alert("Molt be")
    else if (nota2 >=9) alert("Exelent")
} else alert("La nota introduida no es correcte")
    