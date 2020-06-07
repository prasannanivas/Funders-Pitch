const routes = require('next-routes')();

routes.add('/campaigns/show/:address',"/Campaigns/show");
routes.add('/campaigns/show/:address/request','/Campaigns/request');
routes.add('/campaigns/show/:address/request/new','/Campaigns/newrequest');

module.exports = routes;