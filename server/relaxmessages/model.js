const Sequelize = require("sequelize");
const sequelize = require("../db");

const relaxMessage = sequelize.define(
  "relaxMessage",
  {
    text: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
    tableName: "relaxmessages"
  }
);

module.exports = relaxMessage;
