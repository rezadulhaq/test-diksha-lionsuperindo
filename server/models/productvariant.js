"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class ProductVariant extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            ProductVariant.belongsTo(models.Product, {
                foreignKey: "product_id",
            });
            ProductVariant.hasMany(models.TransactionDetail, {
                foreignKey: "product_varian_id",
            });
        }
    }
    ProductVariant.init(
        {
            product_id: DataTypes.INTEGER,
            code: DataTypes.STRING,
            name: DataTypes.STRING,
            image_location: DataTypes.TEXT,
            qty: DataTypes.INTEGER,
            price: DataTypes.INTEGER,
            active: DataTypes.BOOLEAN,
            created_user: DataTypes.STRING,
            updated_user: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "ProductVariant",
        }
    );
    return ProductVariant;
};
