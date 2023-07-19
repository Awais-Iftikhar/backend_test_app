const log = require('../config/logger');

const log_route = (req, res, next) => {
  log.info(`${req.method} ${req.originalUrl} ${new Date().toTimeString()}`);

  next();
};

module.exports = {
  log_route,
};
