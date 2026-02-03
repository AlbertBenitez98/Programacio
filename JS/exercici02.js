"use strict";

// Inputs per introduir el nom i l'edat
const ipreu = document.getElementById("preu");
const idescompte = document.getElementById("descompte");
// Botó per executar l'aplicació
const bExec = document.getElementById("exec");
// Element on mostrar el resultat
const terminal = document.getElementById("terminal");

// Quan es fa clic en el botó 'exec' es crida la funció 'executar()'
bExec.addEventListener("click", executar);

// Funció que executa l'aplicació
function executar() {
    // Obtenir els 'inputs' del document i guardar-los en variables
    //let nom = iNom.value;
    //let edat = iEdat.value;

    // Processar les dades
   // nom = nom.trim().toUpperCase();
    //edat = parseInt(edat);

    const IVA = 21;
let preu = ipreu.value;
let descompte = idescompte.value;
preu = parseInt(preu)
descompte = parseInt(descompte)
let preuDTE = preu - preu * descompte / 100;              
let preuIVA = preuDTE + preuDTE * IVA / 100; 

    // Mostrar el resultat
    terminal.innerHTML = "El preu final es " + preuIVA;
}