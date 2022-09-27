const { DataTypes } = require("sequelize");
const seq = require("../db/seq/seq");
const User = seq.define(
  "user",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = User;
