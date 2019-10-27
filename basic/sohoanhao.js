const uocso  = require('./uocso/uocso')
const tonguocso = require('./uocso/tonguocso')
const kiemtra = (n,b)=>{
    if(n==b){
        return true
    }
    return false
}
const n =29
const a = kiemtra(n,tonguocso(uocso(n)))
console.log(a)