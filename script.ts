console.log("ESTOY TARABAHA")
console.log("PARA COMPILAR USAR TSC. EJEMPLO TSC script.ts. ESTO GENERA UN JS")
console.log("PARA COMPILAR EN MODO OBSERVADOR USAR TSC -w. EJEMPLO TSC -w script.ts. ESTO GENERA UN JS")
console.log("HOA")
let estudiasteJavaScript: boolean = true
if(estudiasteJavaScript) {
    console.log("SIGO")
} else {
    console.log("NO SIGAS")
}

let interMiami: number | undefined | null = 11
let fcDallas: number = 11
let messi: number = 1
let juegaMessi: boolean = false


let palabras: string = 'Me emocioné al verlo a Messi'

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void {
    let motivo:string = ''
    if(juegaMessi) {
        equipo1 += messi
        motivo = 'Porque juega Messi'
    } 
    if(equipo1 > equipo2) console.log("GANA INTER MIAMI " + motivo)
    if(equipo1 == equipo2) console.log("EMPATAN")
    if(equipo1 < equipo2) console.log("GANA FC DALLAS")
}

jugar(interMiami, fcDallas, juegaMessi)

