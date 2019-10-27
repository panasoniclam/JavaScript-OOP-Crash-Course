const uocso = require('./uocso')
const uocsochan = require('./liet-ke-uocso-chan')
const tonguocsochan = arr =>{
   return arr.reduce((a,b)=>a+b)
}
let a =  tonguocsochan(uocsochan(uocso(10)))
console.log(a)