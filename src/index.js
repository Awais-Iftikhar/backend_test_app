require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');
const log = require('./config/logger');
const { PORT, MONGO_SRV_STRING } = require('./config');

mongoose.connect(MONGO_SRV_STRING).then(() => {
  log.success('🚀 Database connected successfully!');
  app.listen(PORT, () => {
    log.success(`🤖 server started on port ${PORT}`);
  });
});
