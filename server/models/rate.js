const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Rate = sequelize.define('Rate', {
    rates_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        precision: true
    },
    currency: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    rate: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    tableName: 'Rates',
    timestamps: false
});

module.exports = Rate;
