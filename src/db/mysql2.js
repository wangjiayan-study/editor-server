const mysql = require('mysql2/promise')
const { mysqlConf } = require('../config')

async function testMysqlConn() {
    const connection = await mysql.createConnection(mysqlConf)
    const [rows] = await connection.execute('select now();')
    return rows
}
// (async () => {
//   testMysqlConn();
// })();

module.exports = testMysqlConn
