const { getUserListService, createUserService } = require('../service/user')

async function getUserList() {
    const data = await getUserListService()
    return data
}
async function createUser() {
    const data = await createUserService()
    return data
}

module.exports = { getUserList, createUser }
