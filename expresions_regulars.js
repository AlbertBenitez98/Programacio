//let pattern = /^(\+|00)\d{1,3}\s*\d{3}(.\s*)\d{3}((.\s*)?\d{3}){0,2}$/;    // Posar aquí el patró a comprovar
let pattern = /^([0-2]?[1-9]|30|31|10|20)-([0]*[1-9]|10|11|12)-(\d{1,2})?\d{2}$/
let s = prompt("Introdueix un text");
while (s && s.toUpperCase() !== "FI") {
    if (pattern.test(s)) alert(s + " COINCIDEIX amb " + pattern);
    else alert(s + " NO coincideix amb " + pattern);
    s = prompt("Introdueix un text");
}

