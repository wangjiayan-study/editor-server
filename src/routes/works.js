const router = require("koa-router")();
const { createWorkContent } = require("../controller/workContent");
router.prefix("/works");

router.get("/list", async function (ctx, next) {
  const rst = await createWorkContent();
  ctx.body = "this is a users response!";
});

module.exports = router;
