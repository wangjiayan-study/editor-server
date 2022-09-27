const seq = require("../seq");
// const { DataTypes, Model } = require("sequelize");
(async () => {
  try {
    await seq.authenticate();
    // class User extends Model {}
    // await User.init(
    //   {
    //     username: DataTypes.STRING,
    //     birthday: DataTypes.DATE,
    //   },
    //   { sequelize: seq, modelName: "user" }
    // );
    // await seq.sync();
    // const list = await User.findAll();
    // console.log("list", list);
    // const jane = await User.create({
    //   username: "janedoe",
    //   birthday: new Date(1980, 6, 20),
    // });
    // console.log(jane.toJSON());
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
