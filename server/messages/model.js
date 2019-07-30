const Sequelize = require("sequelize");
const sequelize = require("../db");

const Message = sequelize.define(
  "Message",
  {
    text: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
    tableName: "messages"
  }
);

module.exports = Message;
