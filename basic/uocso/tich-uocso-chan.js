const uocso = require('./uocso')
const lietkeuocsochan  = require('./liet-ke-uocso-chan')
const tichuocsochan = arr =>{
    return arr.reduce((a,b)=>a*b)
}
const a = tichuocsochan(lietkeuocsochan(uocso(10)))
console.log(a)
 