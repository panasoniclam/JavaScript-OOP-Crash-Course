const uocso  = require('./uocso')
const tonguocso =  arr =>{
   return arr.reduce((a,b)=>a+b)
}
let a = tonguocso(uocso(10))
console.log(a)