const router = require("koa-router")();
const { getUserList, createUser } = require("../controller/getUserList");
router.prefix("/users");

router.get("/", function (ctx, next) {
  ctx.body = "this is a users response!";
});

router.get("/create", async function (ctx, next) {
  const data = await createUser();
  ctx.body = "this is a users/bar response";
});

router.get("/list", async function (ctx, next) {
  const data = await getUserList();
  ctx.body = {
    res: data,
  };
});

module.exports = router;
