const { getUserListService } = require("../service/user");

async function getUserList() {
  const data = await getUserListService();
  return data;
}

module.exports = getUserList;
