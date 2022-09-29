const { isPrd, isPrdDev } = require('../utils/env')

let fileName = 'dev.js'
if (isPrdDev) fileName = 'prd-dev.js'
if (isPrd) fileName = 'prd.js'
console.log('isPrdDev', isPrdDev)
const conf = require(`./envs/${fileName}`) // eslint-disable-line
console.log('conf', conf)
module.exports = conf
