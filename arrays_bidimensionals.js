// calcular files d'un array files = array.length
// calcular columnes d'un array columnes = array[0].length

const F = 4
const C = 6
let array = crearArray(F, C)
mostrarArray(array, F, C)
let sumacolumnes = sumaColumnes(array, F, C)
let sumafiles = sumaFiles(array, F, C)
let totalFiles = 0;
for (i = 0; i < F; ++i) {
    totalFiles += sumafiles[i];
}

let totalColumnes = 0;
for (i = 0; i < C; ++i) {
    totalColumnes += sumacolumnes[i];
}
console.log(totalColumnes , totalFiles)
if (totalFiles == totalColumnes) alert("La suma dona el mateix: " + totalFiles);
else alert("La suma dona diferent: " + totalFiles + " vs " + totalColumnes);


function crearArray(F, C) {
    let array = [];

    for (let i = 0; i < F; i++) {
        array[i] = [];
        for (let j = 0; j < C; j++) {
            array[i][j] = Math.floor(Math.random() * 10);
        }
    }

    return array;
}

function mostrarArray(array, F, C) {
    let resultat = "";
    for (i = 0; i < F; ++i) {
        for (j = 0; j < C; ++j) {
            resultat += array[i][j] + " ";
        }
        resultat += "\n";
    }
    console.log(resultat);
}

function sumaFiles(array, F, C) {
    let sumaFiles = []
    let totalFila;
    for (i = 0; i < F; ++i) {
        totalFila = 0;
        for (j = 0; j < C; ++j) {
            totalFila += array[i][j];
        }
        sumaFiles[i] = totalFila;
    }
    return sumaFiles;
}

function sumaColumnes(array, F, C) {
    let sumaColumnes = [];
    let totalColumna;
    for (j = 0; j < C; ++j) {
        totalColumna = 0;
        for (i = 0; i < F; ++i) {
            totalColumna += array[i][j];
        }
        sumaColumnes[j] = totalColumna;
    }
    return sumaColumnes;
}