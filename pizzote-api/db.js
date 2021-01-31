const Sequelize = require("sequelize");

const sequelize = new Sequelize("pizzote_Entries", "cuoco", "p1zza", {
  host: "localhost",
  dialect: "mariadb",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
