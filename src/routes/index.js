const express = require('express');
const transactionRoute = require('./transaction.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/transaction',
    route: transactionRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
