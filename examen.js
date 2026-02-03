validarContrasenya()

function Valoracio() {
    let hores = parseInt(prompt("Introdueix el número d'hores:"))
    if (hores == null) return // si es prem cancelar torna al menu
    else if (hores >= 0 && hores <= 10) alert("casual")
    else if (hores >= 11 && hores <= 30) alert("fan")
    else if (hores >= 31 && hores <= 60) alert("superfan")
    else alert("addicte")
}

function BuscarParaula() {
    let text = prompt("Introdueix un text:")
    if (text === null) return // si es prem cancelar torna al menu
    let paraula = prompt("Introdueix una paraula:")
    if (paraula === null) return
    text = text.toUpperCase()
    paraula = paraula.toUpperCase()
    let contador = 0
    let pos = 0
    while (true) {
        pos = text.indexOf(paraula, pos)
        if (pos === -1) break;
        contador++
        pos += paraula.length
    }
    alert("La paraula apareix " + contador + " vegades")
}

function validarContrasenya() {
    let contrasenya = prompt("Introdueix una contrasenya")
    if (contrasenya.length < 8) {
        alert("La contrasenya ha de tenir 8 caracters")
        return;
    }
    let mayus = false
    let min = false
    let num = false
    for (let i = 0; i < contrasenya.length; i++) {
        let c = contrasenya[i]
        if (c >= "A" && c <= "Z") mayus = true
        else if (c >= "a" && c <= "z") min = true
        else if (c >= "0" && c <= "9") num = true
    }
    if (mayus && min && num) menu()
    else alert("Contrasenya incorrecta")
}

function menu() {
    let sortir = false
    while (!sortir) {
        let opcio = prompt(
            "MENÚ PRINCIPAL\n\n" +
            "A - Valoració d'usuari\n" +
            "B - Buscar paraula\n" +
            "C - Participar sorteig\n" +
            "Z - Sortir del programa\n\n" +
            "Selecciona una opció:"
        )
        if (!opcio) continue // si prem cancelar segueix mostrant el menu
        opcio = opcio.toUpperCase()
        switch (opcio) {
            case "A":
                Valoracio()
                break;
            case "B":
                BuscarParaula()
                break;
            case "C":
                Sorteig()
                break;
            case "Z":
                alert("Sortint del programa...")
                sortir = true;
                break;
            default:
                alert("Opció no valida")
        }
    }
}