const Sequelize = require("sequelize");
const { pizzaData } = require("./models/pizzaData");

const sequelize = new Sequelize("pizzaTime", "root", "1243", {
  host: "localhost",
  dialect: "mariadb",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
  pizzaData.sync();
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
