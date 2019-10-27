const uocso = require('./uocso')
const tichuocso = arr =>{
    return arr.reduce((a,b)=>a*b)
}
let a = tichuocso(uocso(10))
console.log(a)