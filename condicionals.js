// let preu = prompt("Preu del producte");
// preu = parseFloat(preu);

// // aplicaar descompte del 15%
// if (preu >= 500) {
//     preu -= preu * 10 / 100;
// }

// // afegir preu transport
// if (preu < 20) {
//     preu += 5;
// }

// alert("Preu final " + preu);

// //ex02

// const CONTRASENYA = 1234
// let contrasenya;
//     contrasenya = prompt("Introdueix la contrasenya")
//     contrasenya = parseInt(contrasenya)
// if (contrasenya == CONTRASENYA) {alert("Correcte")}   
// else { alert("Incorrecte")}

// // ex03

// let n1 = prompt("Numero 1")
// n1 = parseFloat(n1.replace(",", "."))
// let n2 = prompt("Numero 2")
// n2 = parseFloat(n2.replace(",", "."))

// if (n1 % n2 == 0){alert("Numero 1 es multiple de Numero 2")}
// else {alert("Numero 1 no es multiple de Numero ")}

// //ex04

// let numeroE = prompt("Introdueix numero enter")
// numeroE = parseFloat(numeroE.replace(",", "."))

// if (numeroE < 0) {alert("El numero es negatiu")}
// else if (numeroE > 0) {alert("El numero es positiu")}
// else {alert("El numero es 0")}

// //ex05

// let edat = prompt("Introdueix la teva edat")
// edat = parseFloat(edat.replace("," , "."))

// if (edat >= 18 && edat < 80) alert("Pots conduir un cotxe")
// if (! (edat >= 16 && edat <= 67 )) alert("No estas en edat de treballar")
// if (edat < 3) alert("Has d'anar a la guarderia")
// if (edat >= 18 && edat <= 24) alert("Pots estudiar")

// // ex06

// let primernumero = prompt("primer numero")
// primernumero = parseFloat(primernumero.replace(",", "."))
// let segonnumero = prompt("segon numero")
// segonnumero = parseFloat(segonnumero.replace(",", "."))
// let tercernumero = prompt("tercer numero")
// tercernumero = parseFloat(tercernumero.replace(",", "."))

// if (primernumero > segonnumero && primernumero > tercernumero)alert(primernumero + " és el més gran");
//  else if (segonnumero > primernumero && segonnumero > tercernumero) alert(segonnumero + " és el més gran");
//  else if (tercernumero > primernumero && tercernumero > segonnumero) alert(tercernumero + " és el més gran");
//  else  alert("Tots tres són iguals");

 // ex07

 let any = prompt("Introdueix un any")
 any = parseFloat(any.replace(",", "."))

 if (any % 400 == 0) alert("SÍ és any de traspàs");
 else if (any % 100 == 0) alert("NO és any de traspàs");
 else if (any % 4 == 0) alert("SÍ és any de traspàs");
 else  alert("NO és any de traspàs");

