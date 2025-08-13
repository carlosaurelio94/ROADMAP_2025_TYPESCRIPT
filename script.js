console.log("ESTOY TARABAHA");
console.log("PARA COMPILAR USAR TSC. EJEMPLO TSC script.ts. ESTO GENERA UN JS");
console.log("PARA COMPILAR EN MODO OBSERVADOR USAR TSC -w. EJEMPLO TSC -w script.ts. ESTO GENERA UN JS");
console.log("HOA");
let estudiasteJavaScript = true;
if (estudiasteJavaScript) {
    console.log("SIGO");
}
else {
    console.log("NO SIGAS");
}
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = false;
let palabras = 'Me emocioné al verlo a Messi';
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 += messi;
        motivo = 'Porque juega Messi';
    }
    if (equipo1 > equipo2)
        console.log("GANA INTER MIAMI " + motivo);
    if (equipo1 == equipo2)
        console.log("EMPATAN");
    if (equipo1 < equipo2)
        console.log("GANA FC DALLAS");
}
jugar(interMiami, fcDallas, juegaMessi);
export {};
//# sourceMappingURL=script.js.map