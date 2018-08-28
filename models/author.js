module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("Author", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Author.associate = function(models) {
        Author.hasMany(models.Review)
    };

    return Author;

};