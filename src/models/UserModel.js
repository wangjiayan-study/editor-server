const { DataTypes, Model } = require("sequelize");
const seq = require("../db/seq/seq");
class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize: seq, modelName: "users" }
);
module.exports = User;
