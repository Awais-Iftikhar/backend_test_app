const chalk = require('chalk');

const log = {
  success: (message) => {
    console.log(chalk.green(message));
  },
  error: (message) => {
    console.log(chalk.red(message));
  },
  info: (message) => {
    console.log(chalk.blueBright(message));
  },
};

module.exports = log;
