const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("pizzaTime", "root", "1243", {
  host: "localhost",
  dialect: "mariadb",
});

const pizzaData = sequelize.define(
  "pizzaData",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    RestaurantName: {
      type: DataTypes.STRING,
    },
    Date: {
      type: DataTypes.DATE,
    },
    WaitTime: {
      type: DataTypes.INTEGER,
    },
    Moment: {
      type: DataTypes.STRING,
    },
    Type: {
      type: DataTypes.STRING,
    },
    Price: {
      type: DataTypes.STRING,
    },
    Rating: {
      type: DataTypes.INTEGER,
    },
    Comments: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { pizzaData };
