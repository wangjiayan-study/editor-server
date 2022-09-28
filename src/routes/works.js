const router = require('koa-router')()
const { createWorkContent } = require('../controller/workContent')

router.prefix('/works')

router.get('/list', async ctx => {
    const rst = await createWorkContent()
    ctx.body = 'this is a users response!'
})

module.exports = router
