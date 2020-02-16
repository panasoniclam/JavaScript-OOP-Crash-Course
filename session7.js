const a = function * dosomething(){
    for(let i=0;i<5;i++){
        yield i
    }
}()
console.log(a.next())