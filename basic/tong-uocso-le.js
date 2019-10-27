const lietket = require('./liet-ke-uocso-le')
const uocso = require('./uocso')
const tonguocsole = arr =>{
  return  arr.reduce((a,b)=>a+b)
}

const a = tonguocsole(lietket(uocso(10)))
console.log(a)