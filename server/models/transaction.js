"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Transaction extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Transaction.hasMany(models.TransactionDetail, {
                foreignKey: "transaction_id",
            });
        }
    }
    Transaction.init(
        {
            transaction_no: DataTypes.INTEGER,
            total_amount: DataTypes.INTEGER,
            active: DataTypes.BOOLEAN,
            created_user: DataTypes.STRING,
            updated_user: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Transaction",
        }
    );
    return Transaction;
};
