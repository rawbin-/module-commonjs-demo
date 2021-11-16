export {a,b,test,Person,obj} from "./test-export.mjs";

// a = 2

// obj.a = a

// console.log(obj.a)

import * as all from './test-export.mjs'
console.log(all)

import dft from  "./test-export.mjs"

console.log(dft)
