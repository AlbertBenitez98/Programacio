"use strict";

// ex01

let n1, n2;
let op;

n1 = parseFloat(prompt("Primer numero").replace(",", "."));
n2 = parseFloat(prompt("Segon numero").replace(",", "."));
op = prompt("Quina opreacio vols fer? (+ - * o /)").charAt(0);

if (isNaN(n1) || isNaN(n2)) alert("Algun dels valors es incorrecte");

switch (op) {
    case "+" :
        alert("resultat: " + (n1 + n2))
        break;
    case "-" :
        alert("resultat: " + (n1 - n2))
        break;
    case "*" :
        alert("resultat: " + (n1 * n2))
        break;
    case "/" :
        alert("resultat: " + (n1 / n2))
        break;
    default :
    alert("No reconec l'operacio " + op)
}

// ex02

let mes = prompt("Introdueix el nom d'un mes").trim().toLowerCase();
let any;

switch (mes) {
    case "gener" :
    case "marc" :
    case "maig" :
    case "juliol" :
    case "agost" :
    case "octubre" :
    case "desembre" :
        alert("Te 31 dies");
        break;
    case "abril" :
    case "juny" :
    case "septembre" :
    case "novembre" :
        alert("Te 30 dies");
        break;
    case "febrer" :
        any = parseInt(prompt("de quin any?"))
        if (any % 400 == 0 || (any % 4 == 0 && any % 100 != 0))
            alert("Te 29 dies");
        else 
            alert("Te 28 dies");
        break;
    default :
        alert("No reconec el nom")
}

// ex03

let nota = prompt("Introdueix la nota (A, B, C, D)").trim().toUpperCase()

switch (nota) {
    case "A" :
        alert("Excelent (9-10)")
        break;
    case "B" :
        alert("Notable (7-8)")
        break;
    case "C" :
        alert("Aprovat (5-6)")
        break;
    case "D" :
        alert("Suspes (1-4)")
        break;
    default :
        alert("No reconec la nota " + (nota))
}

// ex04

let not = parseInt(prompt("Introdueix la nota"))

if (isNaN(not)) alert("La nota ha de ser un valor numeric")

switch (not) {
    case 1 :
    case 2 :
    case 3 :
    case 4 :
        alert("Nota: D")
        break;
    case 5 :
    case 6:
        alert("Nota: C")
        break;
    case 7 :
    case 8 :
        alert("Nota: B")
        break;
    case 9 :
    case 10 :
        alert("Nota: A")
        break;
    default :
        if (not < 1) alert("La nota no pot ser inferior a 1")
        else if (not > 10) alert("La nota no pot ser superior a 10")
}

// ex05

let temperatura = parseInt(prompt("Introdueix la temperatura (25-45)")) 
    if (isNaN(temperatura)) alert("La temperatura ha de ser un numero")
    else if (temperatura < 24 || temperatura > 45) alert("temperatura incorrecta");

let tos = prompt("Introdueix tipus de tos (NO, SECA, EXPECTORANT)").trim().toUpperCase();
    //if (tos != "NO" && "SECA" && "EXPECTORANT") alert("Valor incorrecte")

let presio = parseInt(prompt("Introdueix la presio (80 - 180)"))
    if (isNaN(presio)) alert("La presio ha de ser un valor numeric")
    else if (presio < 80 || presio > 180) alert("Presio incorrecta");

let categoria;
if (temperatura < 32 || temperatura > 42 || presio < 100) (categoria = "m");
else if (temperatura >= 35 && temperatura <=38 &&+ tos == "NO" && presio >= 120 && presio <= 140) (categoria = "e");
else if (temperatura > 38 && tos == "EXPECTORANT") (categoria = "d");
else if (temperatura > 38 && tos == "SECA") (categoria = "c");
else if (temperatura >= 35 && temperatura <= 38 && tos == "NO" && (presio < 120 || presio > 140)) (categoria = "b");
else (categoria = "a")

switch (categoria) {
    case "m" :
        alert("No hi ha res a fer...")
    case "e" :
        alert("Que esperi sentat")
        break;
    case "d" :
        alert("Neumoleg urgencies")
        break;
    case "c" :
        alert("Planta COVID")
        break;
    case "b" :
        alert("Cardioleg")
        break;
    case "a" :
        alert("Esperar i li pases a casos especials")
        break;
}
