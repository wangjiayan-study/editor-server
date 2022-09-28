const { createClient } = require('redis')
const { redisConf } = require('../config')

const { port, host, password } = redisConf
const opt = { autoConnect: true }
if (password) {
    opt.password = password // prd 环境需要密码
}
const redisClient = createClient(port, host, opt, { autoConnect: true })

redisClient.on('error', err => console.log('Redis Client Error', err))
redisClient.on('connect', () => {
    console.log('redis connect success')

    // redisClient.set('foo', 'bar', redis.print) // => "Reply: OK"
    // redisClient.get('foo', redis.print) // => "Reply: bar"
    // redisClient.quit()
})

module.exports = redisClient
