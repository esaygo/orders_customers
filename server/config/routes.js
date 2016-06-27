
var customers = require('../controllers/customers.js');
var orders = require('../controllers/orders.js');

module.exports = function(app) {

  app.get('/customers', customers.index);

  app.post('/customers', customers.create);

  app.post('/customers/:id', customers.delete);

}
