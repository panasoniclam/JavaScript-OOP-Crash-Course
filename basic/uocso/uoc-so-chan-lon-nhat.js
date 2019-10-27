const uocso = require('./uocso')
const lietkeuocsochan = require('./liet-ke-uocso-chan')
const uocsochanlonnhat = arr =>{
    return Math.max.apply(Math,arr)
}
const a = uocsochanlonnhat(lietkeuocsochan(uocso(20)))
console.log(a)