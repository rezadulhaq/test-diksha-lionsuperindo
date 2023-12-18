"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("TransactionDetails", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            transaction_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Transactions",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            product_varian_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "ProductVariants",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            price: {
                type: Sequelize.INTEGER,
            },
            qty: {
                type: Sequelize.INTEGER,
            },
            subtotal: {
                type: Sequelize.INTEGER,
            },
            active: {
                type: Sequelize.BOOLEAN,
            },
            created_user: {
                type: Sequelize.STRING,
            },
            updated_user: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("TransactionDetails");
    },
};
