console.log('#moduleA start')

exports.varA = 1

const varB = 2
const varC = 3

const moduleB = require('./moduleB')

console.log(moduleB.varA,moduleB.varB,moduleB.varC)

module.exports = {
    varB,
    varC
}

console.log('#moduleA end')
