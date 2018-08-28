module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        restaurantName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 160],
                msg: "Please ensure the review title is between 1 and 160 characters in length"
            }//close validate
        },//close restaurant name property
        value: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: 5,
                min: 0
            }//close validate
        },//close value property
        highCost: {
            type: DataTypes.FLOAT,
            allowNull: false
        },//close highCost property
        lowCost: {
            type: DataTypes.FLOAT,
            allowNull: false
        },//close lowCost proprety
        shouldYouGo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            dafaultValue: 1,
            validate: {
                max: 3, //definitely go, yes, maybe, no
                min: 0
            }
        },//close shouldYouGo property
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: 10,
                min: 0
            }//close validate
        },//close rating
        reviewText: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        mainPictureLink: {
            type: DataTypes.STRING
        },
        topChoice: {
            type: DataTypes.BOOLEAN,
            defaultVlaue: false,
            allowNull: false
        }
    });//close Review model setup

    Review.associate = function (models) {
        Review.belongsTo(models.Author, {
            foreignKey: {
                allowNull: false
            }
        });
    }


    return Review;

}//close module.exports
