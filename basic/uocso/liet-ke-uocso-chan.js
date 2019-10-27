
const uosochan = arr =>{
    let result  = []
    arr.map((value,index)=>{
        if(value%2==0){
            result.push(value)
        }
    })
    return result
}
module.exports = uosochan