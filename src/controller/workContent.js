const { createWorkContentService } = require("../service/works");

async function createWorkContent() {
  const rst = await createWorkContentService();
  return rst;
}

module.exports = { createWorkContent };
