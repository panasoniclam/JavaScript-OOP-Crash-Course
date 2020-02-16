const a =  function * doSomething(){
    for(let i=0;i<5;i++){
        yield i
    }
}()
console.log(a.next())
console.log(a.next())
console.log(a.next())