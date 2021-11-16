import('./just-console.cjs')
import('./just-console.mjs')

import "./just-console.cjs"

import {changing} from "./module-test.cjs";

setInterval(() => {
    console.log(changing)
},1000)
