const router = require("koa-router")();
const testMysqlConn = require("../db/mysql2");
const { ENV } = require("../utils/env");
const packageInfo = require("../../package.json");
const UserModel = require("../models/UserModel");
router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!",
  });
});

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  };
});
// 测试数据库连接
router.get("/api/db-check", async (ctx, next) => {
  // 测试 mysql 连接
  const mysqlRes = await testMysqlConn();
  // `sequelize.define` also returns the model
  console.log("UserModel", UserModel); // true

  ctx.body = {
    errno: 0,
    data: {
      name: "biz editor sever",
      version: packageInfo.version,
      ENV,
      // redisConn: redisTestVal != null,
      mysqlConn: mysqlRes.length > 0,
      // mongodbConn,
    },
  };
});

module.exports = router;
