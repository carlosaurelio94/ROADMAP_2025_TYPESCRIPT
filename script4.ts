type Programador = {
    nombre: string,
    tecnologias: string[],
    tomarMate?: boolean | null
}

let programador: Programador = {
    nombre: 'Sergie Code',
    tecnologias: ['Angular', 'JS'],
    tomarMate: true
};

let programador2: Programador = {
    nombre: 'Ricardo Buenardo',
    tecnologias: ['C++'],
    tomarMate: null
} 

console.log("programador: ", programador)

interface ProgramadorNuevo {
    nombre:string,
    tecnologias: string[],
    tomarMate?: boolean | null
}

let programadorNuevo: ProgramadorNuevo = {
    nombre: 'Sergie Code',
    tecnologias: ['Angular', 'JS'],
    tomarMate: true
};

let programadorNuevo2: ProgramadorNuevo = {
    nombre: 'Ricardo Buenardo',
    tecnologias: ['C++'],
    tomarMate: null
} 

function enviarCv( dev : ProgramadorNuevo) {
    console.log("ESTE CURRICULUM ES DE " + dev.nombre)
}
console.log("1")
enviarCv(programadorNuevo)
console.log("2")
