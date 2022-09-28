const { WorkContentModel } = require('../models/WorkContent')

async function createWorkContentService() {
    const rst = await WorkContentModel.create({
        components: {
            div: 'test',
        },
        props: {
            color: 'red',
        },
        setting: {
            wx: {
                shareUrl: 'www.baidu.com',
            },
        },
    })
    console.log('rst', rst)
    return rst
}

module.exports = {
    createWorkContentService,
}
