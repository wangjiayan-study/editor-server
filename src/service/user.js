const UserModel = require("../models/UserModel");
const seq = require("../db/seq/seq");
/**
 * 创建用户
 * @param {Object} data 用户信息，要符合 UserModel 的属性
 */
async function createUserService(data = {}) {
  const result = await UserModel.create(data);
  return result.dataValues;
}

async function getUserListService(data = {}) {
  // await seq.sync();
  const jane = await UserModel.findAll();
  console.log(jane.toJSON());
  return [];
}

module.exports = {
  createUserService,
  getUserListService,
};
