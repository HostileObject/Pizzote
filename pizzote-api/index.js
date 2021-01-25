const Express = require('express');
const cors = require('cors');
require('./db');

const pizzaDataRoutes = require('./routers/pizzaDataController');

const port = 4000;

const app = Express();
app.use(Express.json());
app.use(cors({ origin: 'http://192.168.1.144:3000' }));
app.listen(port, () => console.log('Server stardet at port: ' + port));

app.use('/pizzaData', pizzaDataRoutes);
