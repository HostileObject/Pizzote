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
      unsigned: true,
      autoIncrement: true,
      primaryKey: true,
    },
    restaurantName: {
      type: DataTypes.STRING,
    },
    Date: {
      type: DataTypes.DATE,
    },
    waitTime: {
      type: DataTypes.STRING,
    },
    moment: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    comments: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { pizzaData };
