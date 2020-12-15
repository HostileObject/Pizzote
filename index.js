const Express = require("express");

const pizzaDataRoutes = require("./routers/pizzaDataController");

const app = Express();
app.use(Express.json());
app.listen(4002, () => console.log("Server stardet at port: 4000"));

app.use("/pizzaData", pizzaDataRoutes);
