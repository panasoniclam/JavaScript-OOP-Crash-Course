const add =(a,b,cb)=>{
    return setTimeout(()=>{
        if(typeof a!= 'number' || typeof b!= 'number'){
            return cb(true,undefined)
        }
        else{
            return cb(false,a+b)
        }
    },2000)
}
 
 
const obj = {
    name:"ddjjd",
    authir:"jdjd"
}
console.log(obj.authir)