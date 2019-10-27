const uocso   = require('./uocso')
const lietkeuocsole = require('./liet-ke-uocso-le')
const uocsolelonnhat = arr =>{
     return Math.max.apply(Math,arr)
    
}
const a = uocsolelonnhat(lietkeuocsole(uocso(100)))
console.log(a)