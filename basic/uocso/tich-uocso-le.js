const uocso = require('./uocso')
const lietkeuocsole = require('./liet-ke-uocso-le')
const tichuocsole = arr =>{
    return arr.reduce((a,b)=>a*b)
}
const a = tichuocsole(lietkeuocsole(uocso(10)))
console.log(a)