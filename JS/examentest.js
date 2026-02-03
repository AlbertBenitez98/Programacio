// ex01
let aulesSMX = ["Aula1", "Aula2", "Aula3", "Aula4", "Aula0"]
let aulesDAW = ["Aula2", "Aula4", "AulaBTX1"]

function elementsComuns(array1, array2) {
    const resultat = [];
    for (let e of array1) {
        if (array2.includes(e)) {
            resultat.push(e);
        }
    }
    return resultat;
}

// ex02
const files = ['A', 'B', 'C']
const columnes = [1, 2, 3, 4]

function restultatCombinat(f, c) {
    const resultat = [];
    for (let i = 0; i < f.length; i++) {
        resultat[i] = [];
        for (let j = 0; j < c.length; j++) {
            resultat[i].push(f[1] + '.' + c[j]);
        }
    }
}

// ex03
const paraules = [hola...]

function ex03 (array, posicio) {
    if (posicio < 0) {
        throw new Error("La posicio es negativa")
    }
    if (posicio >= array.length) {
        throw new Error("La posicio esta fora del array")
    }
return array[posicio]
}

try{
    ex03 (array, posicio);
}
catch(error){
    alert(error.message)
}

// ex04
const array[asjdsd....]

array.sort();
if (cercaBinaria(array, paraula)
    return true

function cercaBinaria(array, paraula){

}