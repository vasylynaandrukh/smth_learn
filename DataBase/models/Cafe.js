`use strict`;
module.exports = (sequelize, DataTypes)=> {
    const cafe = sequelize.define('cafe',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
    name: {
            type: DataTypes.STRING
    },

    password: {
            type: DataTypes.STRING
    }
    }, {
        tableName: 'cafe',
        timestamps:false

    })
    return cafe;
}
