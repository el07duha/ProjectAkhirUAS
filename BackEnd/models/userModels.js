import { Sequelize } from "sequelize";
import db from "../config/dataBase.js";

const { DataTypes } = Sequelize;

const user = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default user;

(async () => {
  await db.sync();
})();
