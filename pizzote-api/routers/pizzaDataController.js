const Express = require('express');
const router = Express.Router();

const { pizzaData } = require('../models/pizzaData');

router.get('/', (req, res) => {
    pizzaData.findAll().then((projects) => {
        res.send(projects);
    });
});

router.post('/', (req, res) => {
    var newPizza = {
        restaurantName: req.body.restaurantName,
        entryDate: req.body.entryDate,
        waitTime: req.body.waitTime,
        moment: req.body.moment,
        type: req.body.type,
        price: req.body.price,
        rating: req.body.rating,
        comments: req.body.comments,
    };

    pizzaData.create(newPizza);
    console.log(newPizza);

    res.send(newPizza);
});

router.put('/:id', (req, res) => {
    var updatedPizza = {
        restaurantName: req.body.restaurantName,
        entryDate: req.body.entryDate,
        waitTime: req.body.waitTime,
        moment: req.body.moment,
        type: req.body.type,
        price: req.body.price,
        rating: req.body.rating,
        comments: req.body.comments,
    };

    pizzaData.update(updatedPizza, {
        where: {
            id: req.params.id,
        },
    });
});

router.delete('/:id', (req, res) => {
    pizzaData.destroy({
        where: {
            id: req.params.id,
        },
    });
});

module.exports = router;
