`use strict`;
module.exports = (sequelize, DataTypes)=> {
    const drink= sequelize.define('drink',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
        },

        ingredients: {
            type: DataTypes.STRING
        },
        type_drink_id: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'drink',
        timestamps:false

    });

    const typeDrink = sequelize.import('./Type_drink.js');
    drink.belongsTo(typeDrink, {foreignKey:'type_drink_id'});

    return drink;
}
