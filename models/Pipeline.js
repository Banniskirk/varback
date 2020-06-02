const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Pipeline = sequelize.define('pipeline', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  supplier: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  niss: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  channel: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phase: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  paperwork: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  paperwork_date: {
    type: Sequelize.DATE,
  },
  sample: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  sample_date: {
    type: Sequelize.DATE,
  },
  info_required: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  info_required_date: {
    type: Sequelize.DATE,
  },
  vendor_profile: {
    type: Sequelize.INTEGER,
  },
  web_po: {
    type: Sequelize.INTEGER,
  },
  label_review: {
    type: Sequelize.INTEGER,
  },
  ntp: {
    type: Sequelize.INTEGER,
  },
  ntp_date: {
    type: Sequelize.DATE,
  },
  ntp_quantity: {
    type: Sequelize.INTEGER,
  },
  ntp_release_date: {
    type: Sequelize.DATE,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = Pipeline;
