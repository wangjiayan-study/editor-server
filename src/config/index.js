const { isPrd } = require('../utils/env')

let fileName = 'dev.js'
if (isPrd) fileName = 'prd.js'

const conf = require(`./envs/${fileName}`) // eslint-disable-line
module.exports = conf
