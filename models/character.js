module.exports = function(sequelize, DataTypes){
    const Character = sequelize.define("Character", {
        name: DataTypes.STRING, 
        class: DataTypes.STRING, 
        race: DataTypes.STRING,
        weapons: {
            type: DataTypes.STRING, 
            get: function() {
                return JSON.parse(this.getDataValue('weapons'));
            }, 
            set: function(val) {
                return this.setDataValue('weapons', JSON.stringify(val));
            }
        }
    })
    return Character;
};