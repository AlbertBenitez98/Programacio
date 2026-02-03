files = prompt("Cuanta llargada te el cerc?")
columnes = prompt("Cuanta amplada te el cerc?")

let array = crearArray(files, columnes)
obtenirTensions(array)

let resultat = obtenirTensions(array)
revisar = resultat.revisar
tensions = resultat.tensions

if (revisar) {
    alert("ALERTA Cal revisar el cercat")
} else {
    alert("El cercat esta correcte")
}
alert("Tensions del tancat: " + tensions)

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

function obtenirTensions(array) {
    let tensions = []
    let revisar = false
    let files = array.length
    let columnes = array[0].length
    for (let i = 0; i < files; i++) {
        for (let j = 0; j < columnes; j++) {
            if (i == 0 || i == files - 1 || j == 0 || j == columnes - 1) {
                let num = array[i][j];
                tensions.push(num);

                if (num < 4 || num > 8) {
                    revisar = true;
                }
            }
        }
    }
    return {revisar, tensions}
}

