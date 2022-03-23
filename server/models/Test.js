module.exports = () => {
    const {Sequelize, DataTypes} = require('sequelize');
    const sequelize = new Sequelize('mysql::memory:');

    const Test = sequelize.define("Test", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },{
        timestamps: true
    });
    return Test;
};


