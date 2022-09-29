const devConf = require('./dev')

Object.assign(devConf.redisConf, {
    // redis容器的容器名称
    host: 'editor-redis',
})

Object.assign(devConf.mongodbConf, {
    // redis容器的容器名称
    host: 'editor-mongo',
})

Object.assign(devConf.mysqlConf, {
    // redis容器的容器名称
    host: 'editor-mysql',
})
module.exports = devConf
