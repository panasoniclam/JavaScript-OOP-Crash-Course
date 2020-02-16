const squace = (a,b,h)=> (a+b)*h/2 ;
const add =(a,b,cb)=>{
    const err = 'loi'
    return setTimeout(()=>{
        if(typeof a!= 'number' || typeof b!= 'number'){
            return cb(undefined,err)
        }
        else{
            return cb(a+b,undefined)
        }
    },2000)
}
const mul = (a,b,cb)=>{
    return setTimeout(()=>{
        if(typeof a!= 'number'|| typeof b!= 'number'){
            return cb(undefined,err)
        }else{
            return cb(a*b,undefined)
        }
    },2000)
}
const dev = (a,b,cb)=>{
    return setTimeout(()=>{
        if(typeof a!= 'number' || typeof b!= 'number'){
            return cb(undefined,err)
        }
        else{
            return cb(a/b,undefined)
        }
    },2000)
}
const display = (a,b,h)=>{
    let A = add(a,b,(result,err)=>{
        if(err){
            return  err;
        }
        else{
            return result;
        }
    })
    let B = mul(A,h,(result,err)=>{
         if(err){
            return  err;
        }
        else{
            return result;
        }
    })
    let C = dev(B,2,(result,err)=>{
        if(err){
            return  err;
        }
        else{
            return result;
        }
    })
    console.log(A)
}
display(2,3,4)