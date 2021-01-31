const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("pizzote_Entries", "cuoco", "p1zza", {
  host: "localhost",
  dialect: "mariadb",
});

const pizzaData = sequelize.define(
  "pizzaTableEntries",
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
    entryDate: {
      type: DataTypes.DATE,
    },
    waitTime: {
      type: DataTypes.INTEGER,
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
