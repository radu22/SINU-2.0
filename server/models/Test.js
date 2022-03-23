module.exports = async () => {
    const {Sequelize, DataTypes, Model} = require('sequelize');
    const sequelize = new Sequelize('sinudb', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    class User extends Model {
    }

    User.init({
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            defaultvalue: 'abc',
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
            // allowNull defaults to true
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'User' // We need to choose the model name
    });

// the defined model is the class itself
    console.log(User === sequelize.models.User); // true
};


