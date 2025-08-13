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