require('fs')
console.log(require('./just-console'))
console.log(require.resolve('./just-console'))
// console.log('current require.main:', typeof require.main, require.main)
console.log(__dirname, __filename)
