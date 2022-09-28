/**
 * @description 配置 sequelize ，连接 mysql
 */

const Sequelize = require('sequelize')
const { mysqlConf } = require('../../config')

// 连接配置
const { database, user, password, host, port } = mysqlConf
const conf = {
    host,
    port,
    dialect: 'mysql',
}
// 创建连接
const seq = new Sequelize(database, user, password, conf)
module.exports = seq
