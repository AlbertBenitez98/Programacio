/**
 * Tocado y Hundido (Hundir la Flota) en JavaScript
 *
 * Parámetros:
 * - Tablero de 8x8 con "." para agua y "B" para barco.
 * - Barcos: 1x4, 2x3, 3x2, 4x1.
 * - Entrada del usuario por prompt (Ej: "A1", "H8").
 * - Contador de tiradas.
 * - Casillas ya disparadas no se pueden repetir.
 */

// --- ⚙️ Configuración del Juego ---
const TAMANO_TABLERO = 8;
const BARCOS = [
    { tamano: 4, cantidad: 1 },
    { tamano: 3, cantidad: 2 },
    { tamano: 2, cantidad: 3 },
    { tamano: 1, cantidad: 4 }
];
const LETRAS_COLUMNAS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const SIMBOLO_AGUA = '.';
const SIMBOLO_BARCO = 'B';
const SIMBOLO_TOCADO = 'X';
const SIMBOLO_FALLADO = 'O';

// --- 🗺️ Lógica de Generación del Tablero ---

/**
 * Crea un tablero de 8x8 lleno de agua (.).
 */
function crearTableroVacio() {
    const tablero = [];
    for (let i = 0; i < TAMANO_TABLERO; i++) {
        tablero.push(new Array(TAMANO_TABLERO).fill(SIMBOLO_AGUA));
    }
    return tablero;
}

/**
 * Verifica si un barco puede ser colocado en una posición y dirección dadas.
 * Evita superposición y contacto directo con otros barcos.
 */
function puedeColocarBarco(tablero, fila, columna, tamano, esHorizontal) {
    for (let i = -1; i <= tamano; i++) { // Bucle para comprobar el espacio alrededor del barco
        for (let j = -1; j <= 1; j++) {
            let r, c;

            if (esHorizontal) {
                r = fila + j;
                c = columna + i;
            } else {
                r = fila + i;
                c = columna + j;
            }

            // Verificar límites del tablero
            if (r < 0 || r >= TAMANO_TABLERO || c < 0 || c >= TAMANO_TABLERO) {
                continue;
            }

            // El barco no puede salir de los límites
            if (i >= 0 && i < tamano && j === 0) {
                if (r < 0 || r >= TAMANO_TABLERO || c < 0 || c >= TAMANO_TABLERO) return false;
            }

            // Evitar contacto (incluyendo diagonales)
            if (tablero[r][c] === SIMBOLO_BARCO) {
                return false;
            }
        }
    }
    return true;
}


/**
 * Coloca todos los barcos aleatoriamente en el tablero.
 */
function colocarBarcos(tablero) {
    BARCOS.forEach(tipoBarco => {
        for (let i = 0; i < tipoBarco.cantidad; i++) {
            let colocado = false;
            while (!colocado) {
                const esHorizontal = Math.random() < 0.5;
                const fila = Math.floor(Math.random() * TAMANO_TABLERO);
                const columna = Math.floor(Math.random() * TAMANO_TABLERO);

                // Comprobar si el barco cabe y puede ser colocado sin contacto
                if (esHorizontal) {
                    if (columna + tipoBarco.tamano > TAMANO_TABLERO) continue;
                } else {
                    if (fila + tipoBarco.tamano > TAMANO_TABLERO) continue;
                }

                if (puedeColocarBarco(tablero, fila, columna, tipoBarco.tamano, esHorizontal)) {
                    for (let k = 0; k < tipoBarco.tamano; k++) {
                        if (esHorizontal) {
                            tablero[fila][columna + k] = SIMBOLO_BARCO;
                        } else {
                            tablero[fila + k][columna] = SIMBOLO_BARCO;
                        }
                    }
                    colocado = true;
                }
            }
        }
    });
    return tablero;
}

// --- 📊 Lógica de Interfaz y Entrada ---

/**
 * Muestra el tablero de juego para el usuario (ocultando 'B').
 */
function mostrarTablero(tablero) {
    let output = "  " + LETRAS_COLUMNAS.join(' ') + "\n";
    output += " " + Array(TAMANO_TABLERO * 2).fill('-').join('') + "\n";

    for (let i = 0; i < TAMANO_TABLERO; i++) {
        const filaVisible = tablero[i].map(celda => {
            // Oculta los barcos no tocados para el jugador
            return celda === SIMBOLO_BARCO ? SIMBOLO_AGUA : celda;
        });
        output += (i + 1) + "| " + filaVisible.join(' ') + "\n";
    }
    console.log(output);
}

/**
 * Convierte una coordenada A1-H8 a índices de array [fila, columna].
 * Retorna null si es inválida.
 */
function parseCoordenada(input) {
    const regex = /^([A-H])([1-8])$/i;
    const match = input.toUpperCase().match(regex);

    if (!match) {
        return null; // Coordenada inválida
    }

    const letra = match[1];
    const numero = parseInt(match[2], 10);

    const columna = LETRAS_COLUMNAS.indexOf(letra);
    const fila = numero - 1;

    return [fila, columna];
}

// --- 🎯 Lógica Principal del Juego ---

function iniciarJuego() {
    console.log("⚓ ¡Bienvenido a Tocado y Hundido!");

    // 1. Inicialización del tablero y barcos
    const tablero = crearTableroVacio();
    colocarBarcos(tablero);
    let barcosRestantes = 0;
    
    // Contar el número total de casillas de barco
    tablero.forEach(fila => {
        fila.forEach(celda => {
            if (celda === SIMBOLO_BARCO) {
                barcosRestantes++;
            }
        });
    });

    let tiradas = 0;
    let barcosHundidos = 0;
    let tocadosTotal = 0;
    
    // El tablero del jugador guarda el estado de los disparos
    // (O: Fallo, X: Tocado)
    const tableroDisparos = crearTableroVacio(); 

    console.log(`\nBarcos a hundir: ${barcosRestantes} casillas.`);

    // 2. Bucle principal del juego
    while (tocadosTotal < barcosRestantes) {
        mostrarTablero(tableroDisparos);
        
        const entrada = prompt(`Turno ${tiradas + 1}. Introduce coordenada (Ej: A1-H8). Total tocados: ${tocadosTotal}`);

        if (entrada === null || entrada.trim() === '') {
            console.log("Juego cancelado.");
            return;
        }

        const coords = parseCoordenada(entrada);

        if (!coords) {
            console.log("⚠️ Coordenada inválida. Formato esperado: Letra(A-H)Número(1-8).");
            continue;
        }

        const [fila, columna] = coords;

        // 3. Verificar si la casilla ya fue disparada
        if (tableroDisparos[fila][columna] !== SIMBOLO_AGUA) {
            console.log("❌ Ya has disparado en esa casilla. ¡Prueba otra!");
            continue;
        }

        // 4. Procesar la tirada
        tiradas++;
        console.log(`\nDisparo en ${entrada.toUpperCase()}:`);

        if (tablero[fila][columna] === SIMBOLO_BARCO) {
            // Tocado (Barco)
            tableroDisparos[fila][columna] = SIMBOLO_TOCADO;
            tocadosTotal++;
            console.log("💥 ¡TOCADO!");

            // En un juego completo, aquí se verificaría si el barco se hundió.
            // Para simplificar, solo mostramos el contador de casillas tocadas.

        } else {
            // Agua (Fallado)
            tableroDisparos[fila][columna] = SIMBOLO_FALLADO;
            console.log("🌊 ¡AGUA! (Fallado)");
        }
        
        console.log("------------------------");
    }

    // 5. Final del juego
    mostrarTablero(tableroDisparos);
    console.log("🎉 ¡FELICIDADES! ¡Has hundido todos los barcos!");
    console.log(`Se completó el juego en **${tiradas}** tiradas.`);
}

// 6. Ejecutar el juego
iniciarJuego();

// NOTA: Si usas Node.js, necesitarás instalar un paquete 'prompt-sync' 
// o similar para que la función prompt() funcione fuera del navegador.
// En un navegador (como en la consola de Chrome), prompt() funcionará nativamente.