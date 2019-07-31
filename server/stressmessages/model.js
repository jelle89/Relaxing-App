const Sequelize = require("sequelize");
const sequelize = require("../db");

const stressMessage = sequelize.define(
  "stressMessage",
  {
    text: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
    tableName: "stressmessages"
  }
);

module.exports = stressMessage;
