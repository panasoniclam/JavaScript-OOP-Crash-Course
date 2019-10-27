const uocso = require('./uocso')
const uocsole = arr =>{
    let result  = []
    arr.map((value,index)=>{
        if(value%2!=0){
            result.push(value)
        }
    })
    return result
}
const a = uocsole(uocso(10))
module.exports = uocsole