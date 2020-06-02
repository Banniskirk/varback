const Sequelize = require('sequelize').Sequelize;

const connectDB = new Sequelize('pickles', 'root', 'kegdev', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = connectDB;
