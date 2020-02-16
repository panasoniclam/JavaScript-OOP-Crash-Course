// const async_hook = require('async_hooks')
// //return the id of the current excution context
// const eid = async_hook.executionAsyncId()

//  //return the id of the handle responsible for triggering the callback
//  const tid = async_hook.triggerAsyncId()


//  // create a new async installce,all of there callback are  optional

//  const asyncHook = async_hook.createHook( )
//  console.log(asyncHook)
//  asyncHook.enable()

const fs  = require('fs')
const async_hook = require('async_hooks')
async_hook.createHook({
    init(asyncId,type,triggerAsyncId){
        fs.writeSync(1,`init ${type} resource asyncId: execution :${asyncId} triiger : ${triggerAsyncId}\n`)
    },
    destroy(asyncId){
        const eid = async_hook.executionAsyncId();
        fs.writeSync(1,`destroy resouce: execution ${eid} asyncId: ${asyncId} \n`)
    }
}).enable()

const eid = async_hook.executionAsyncId() ;
fs.writeSync(1,`calling setimeout: execution: ${eid} \n`)
setTimeout(()=>{
    const eid = async_hook.executionAsyncId()
    fs.writeSync(1,`Insine setTimeout: execution: ${eid}\n`)
},0)