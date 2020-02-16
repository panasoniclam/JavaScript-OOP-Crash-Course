// const assert = require('assert')
// const add = (a,b)=>{
//     return a+b
// }
// const expected = add(2,3)
// assert(expected ===5, 'tow plus three is five')
// assert.ok(expected ==5, 'two plus three is five')
// assert.equal(expected,5,'two plus three is five')
// assert.notEqual(expected,6,'two plus three is five')


// const assert = require('assert')
// const add = (a,b,cb)=>{
//     return setTimeout(() => {
//         if(typeof a!= 'number' || typeof b!= 'number'){
//             return cb(true,undefined)
//         }else{
//             return cb(false,a+b)
//         }
//     }, 2000);
// }
// add(2,"3",(err,data)=>{
//     if(err){
//          assert.equal(err,'err')
//     }else{
        
//         assert.ok(data ==5,'two plus three is five')
//     }
// })

// const apromise = new Promise((resolve,reject)=>{
//     // resolve('thanh cong')
//     reject('that bai')
// })
// apromise.then(result=>console.log(result),err=>console.log(err))

const add = ((a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a != 'number' || typeof b!= 'number'){
                reject('loi')
            }else{
                resolve(a+b)
            }
        })
    })
})
add(2,3)
.then(result=>add(result,4) )
.then(result=>add(result,7) )
.then(result=>console.log(result))
.catch(err=>console.log(err))