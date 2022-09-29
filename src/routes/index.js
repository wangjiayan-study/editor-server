const router = require('koa-router')()
const testMysqlConn = require('../db/mysql2')
const { WorkContentModel } = require('../models/WorkContent')
const { ENV } = require('../utils/env')
const { cacheSet, cacheGet } = require('../cache/index')
const packageInfo = require('../../package.json')

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!',
    })
})

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json',
    }
})
// 测试数据库连接
router.get('/api/db-check', async (ctx, next) => {
    // 测试 mongodb 连接
    let mongodbConn
    try {
        mongodbConn = true
        await WorkContentModel.findOne()
    } catch (e) {
        mongodbConn = false
    }
    // 测试 mysql 连接
    const mysqlRes = await testMysqlConn()
    cacheSet('testCon', 'testCon Val')
    const redisTestVal = await cacheGet('testCon')
    ctx.body = {
        errno: 0,
        data: {
            name: 'biz editor sever',
            version: packageInfo.version,
            ENV,
            redisConn: redisTestVal != null,
            mysqlConn: mysqlRes.length > 0,
            mongodbConn,
        },
    }
})

module.exports = router
