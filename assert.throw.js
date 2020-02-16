const assert = require('assert')
assert.throws(
    function(){
        throw new Error('jdjjd')
    },
    Error
)