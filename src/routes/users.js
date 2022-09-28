const router = require('koa-router')()
const { getUserList, createUser } = require('../controller/getUserList')

router.prefix('/users')

router.get('/', ctx => {
    ctx.body = 'this is a users response!'
})

router.get('/create', async ctx => {
    const data = await createUser()
    ctx.body = data
})

router.get('/list', async ctx => {
    const data = await getUserList()
    ctx.body = {
        res: data,
    }
})

module.exports = router
