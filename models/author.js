module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("Author", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP()')
        }
    });

    Author.associate = function(models) {
        Author.hasMany(models.Review)
    };

    return Author;

};