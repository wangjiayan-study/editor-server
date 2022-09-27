const UserModel = require("../models/UserModel");
const now = Date.now();
/**
 * 创建用户
 * @param {Object} data 用户信息，要符合 UserModel 的属性
 */
async function createUserService(data = {}) {
  const result = await UserModel.create({
    id: "g-" + now,
    firstName: "ddd",
    lastName: "lll",
  });
  return result.dataValues;
}

async function getUserListService(data = {}) {
  // await seq.sync();
  const jane = await UserModel.findAll();
  console.log(typeof jane?.[0]);
  return [];
}

module.exports = {
  createUserService,
  getUserListService,
};
