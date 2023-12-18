"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class TransactionDetail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            TransactionDetail.belongsTo(models.Transaction, {
                foreignKey: "transaction_id",
            });
            TransactionDetail.belongsTo(models.ProductVariant, {
                foreignKey: "product_varian_id",
            });
        }
    }
    TransactionDetail.init(
        {
            transaction_id: DataTypes.INTEGER,
            product_varian_id: DataTypes.INTEGER,
            price: DataTypes.INTEGER,
            qty: DataTypes.INTEGER,
            subtotal: DataTypes.INTEGER,
            active: DataTypes.BOOLEAN,
            created_user: DataTypes.STRING,
            updated_user: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "TransactionDetail",
        }
    );
    return TransactionDetail;
};
