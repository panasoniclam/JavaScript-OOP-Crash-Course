const  assert = require('assert')
const arr1 = [1,2,3,4];
const arr2 = [1,2,3,4];

assert.deepEqual(arr1,arr2,'deepEqua check element in the array');

const obj1 = {name:'lamnn',email:'lamnn8@fpt.com.vn',password:"ahihi"}
const obj2 = {name:"lamnn",email:'lamnn8@fpt.com.vn',password:"ahihi"}
assert.deepEqual(obj1,obj2,'there two obj are the same')

assert.notDeepEqual(actual)