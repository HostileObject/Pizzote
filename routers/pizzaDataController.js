const Express = require("express");
const router = Express.Router();

const { pizzaData } = require("../models/pizzaData");

router.get("/", (req, res) => {
  pizzaData.findAll().then((projects) => {
    res.send(projects);
  });
});

router.post("/addpizza", (req, res) => {
  var newPizza = {
    RestaurantName: req.body.RestaurantName,
    Date: req.body.Date,
    WaitTime: req.body.WaitTime,
    Moment: req.body.Moment,
    Type: req.body.Type,
    Price: req.body.Price,
    Rating: req.body.Rating,
    Comments: req.body.Comments,
  };

  pizzaData.create(newPizza);

  res.send(newPizza);
});

router.put("/modpizza/:id", (req, res) => {
  var updatedPizza = {
    RestaurantName: req.body.RestaurantName,
    Date: req.body.Date,
    WaitTime: req.body.WaitTime,
    Moment: req.body.Moment,
    Type: req.body.Type,
    Price: req.body.Price,
    Rating: req.body.Rating,
    Comments: req.body.Comments,
  };

  pizzaData.update(updatedPizza, {
    where: {
      id: req.params.id,
    },
  });
});

router.delete("/delete/:id", (req, res) => {
  pizzaData.destroy({
    where: {
      id: req.params.id,
    },
  });
});

module.exports = router;
