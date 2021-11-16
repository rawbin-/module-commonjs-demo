console.log('#moduleB start')
exports.varA = 1

const varB = 2
const varC = 3

const moduleA = require('./moduleA')
console.log(moduleA.varA,moduleA.varB,moduleA.varC)

module.exports = {
    varB,
    varC
}

console.log('#moduleB end')
