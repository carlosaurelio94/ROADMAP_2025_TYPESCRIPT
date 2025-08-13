let programador = {
    nombre: 'Sergie Code',
    tecnologias: ['Angular', 'JS'],
    tomarMate: true
};
let programador2 = {
    nombre: 'Ricardo Buenardo',
    tecnologias: ['C++'],
    tomarMate: null
};
console.log("programador: ", programador);
let programadorNuevo = {
    nombre: 'Sergie Code',
    tecnologias: ['Angular', 'JS'],
    tomarMate: true
};
let programadorNuevo2 = {
    nombre: 'Ricardo Buenardo',
    tecnologias: ['C++'],
    tomarMate: null
};
function enviarCv(dev) {
    console.log("ESTE CURRICULUM ES DE " + dev.nombre);
}
console.log("1");
enviarCv(programadorNuevo);
console.log("2");
export {};
//# sourceMappingURL=script4.js.map