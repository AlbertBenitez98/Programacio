// let np;
// let ns;
// let inputsegons = 0;
// let resultat = hhmmss(inputsegons);


// ns = parseInt(prompt())
// while (ns != 0){
//         while (np != 0){
//         np = parseInt(prompt());
//         if (np != 0)  inputsegons += np;
//         hhmmss(inputsegons);

//         console.log(resultat);
//     }
// ns = parseInt(prompt())
// }

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

// let n = parseInt(prompt());
// let m;

// for (i = n; i > 0; i--){
//     while (i != 0)
//         for (j = i;)
//         m = parseInt(prompt());
        
// }
let t1 = prompt("")
let t2 = prompt("")
let contador

while (t1 && t2 != 0){  
    contarAcarreos(t1, t2) 
    t1 = prompt("")
    t2 = prompt("")        
}



function contarAcarreos(t1, t2) {
  // Convertim a una cadena i invertim
  let num1 = t1.split('').reverse();
  let num2 = t2.split('').reverse();
    // Calculem la llargada
  const maxLen = Math.max(num1.length, num2.length);
  let acarreo = 0;
  let contador = 0;
    // Bucle en el cual anem agafant els caracters del array i passantlos a num
    // si no hi ha caracter hi posem un 0
  for (let i = 0; i < maxLen; i++) {
    let dig1 = parseInt(num1[i] || '0', 10);
    let dig2 = parseInt(num2[i] || '0', 10);
    // creem la variable de la suma i fem el calcul
    let suma = dig1 + dig2 + acarreo;
    if (suma >= 10) {
      contador++;
      acarreo = 1;
    } else {
      acarreo = 0;
    }
  }

  console.log(contador)
}

