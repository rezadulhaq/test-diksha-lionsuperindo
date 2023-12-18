"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.belongsTo(models.ProductCategory, {
                foreignKey: "product_category_id",
            });
            Product.hasMany(models.ProductVariant, {
              foreignKey:"product_id"
            })
        }
    }
    Product.init(
        {
            plu: DataTypes.STRING,
            name: DataTypes.STRING,
            product_category_id: DataTypes.INTEGER,
            active: DataTypes.BOOLEAN,
            created_user: DataTypes.STRING,
            updated_user: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
