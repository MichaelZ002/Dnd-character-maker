module.exports = function(sequelize, DataTypes){
    const Character = sequelize.define("Character", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
            }, 
        class: {
            type: DataTypes.STRING,
            allowNull: false
            }, 
        race: {
            type: DataTypes.STRING,
            allowNull: false
            },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
        height: {
            type: DataTypes.STRING,
            allowNull: false
            },
        primary_language: {
            type: DataTypes.STRING,
            allowNull: false
            },
        weapons: {
            type: DataTypes.STRING, 
        }
    })
    return Character;
};