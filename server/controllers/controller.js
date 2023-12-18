const { compareHash, hashPassword } = require("../helpers/bcrypt");
const { createToken, decodeToken } = require("../helpers/jwt");
const {
    Product,
    ProductCategory,
    ProductVariant,
    Transaction,
    TransactionDetail,
    User,
} = require("../models/index");

class Controller {
    static async register(req, res, next) {
        try {
            const { username, password } = req.body;
            const check = await User.findOne({ where: { username } });
            if (check) {
                throw "username sudah terdaftar";
            }
            await User.create({ username, password, role: "customer" });
            res.status(201).json(`Register berhasil`);
        } catch (error) {
            next(error);
        }
    }

    static async login(req, res, next) {
        try {
            const { username, password } = req.body;
            console.log(req.body);
            if (!username) {
                throw { name: "UsernameOrPasswordRequired" };
            }
            if (!password) {
                throw { name: "UsernameOrPasswordRequired" };
            }

            let user = await User.findOne({
                where: { username },
            });

            if (!user) {
                throw { name: "InvalidCredentials" };
            }

            let compared = compareHash(password, user.password);

            if (!compared) {
                throw { name: "InvalidCredentials" };
            }

            let payload = {
                username: user.username,
                role: user.role,
            };

            let access_token = createToken(payload);
            res.status(200).json({
                access_token,
                username: user.username,
                role: user.role,
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    //ProductCategory

    static async getAllProductCategory(req, res, next) {
        try {
            const data = await ProductCategory.findAll();
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    //Product

    static async getAllProduct(req, res, next) {
        try {
            const data = await Product.findAll();

            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    //ProductVariant

    static async getAllProductVariant(req, res, next) {
        try {
            const data = await ProductVariant.findAll();

            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    static async getAllProductVariantById(req, res, next) {
        try {
            const { id } = req.params;
            const data = await ProductVariant.findOne({ where: { id } });

            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    static async getAllProductVariantByProductId(req, res, next) {
        try {
            const { id } = req.params;

            const data = await ProductVariant.findAll({
                where: {
                    product_id: id,
                },
            });

            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    //Transaction
    //
    static async getAllTransaction(req, res, next) {
        try {
            const data = await Transaction.findAll({
                where: { created_user: req.user.username },
            });
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    static async createTransaction(req, res, next) {
        try {
            const checkTransaction = await Transaction.findAll();
            const {
                product_varian_id,
                product_id,
                qty,
                created_user,
                updated_user,
            } = req.body;
            const active = true;
            const transaction_no = checkTransaction.length + 1;
            const checkProductVariant = await ProductVariant.findOne({
                where: { id: +product_varian_id },
            });
            const total_amount = checkProductVariant.price * Number(qty);
            const subtotal = checkProductVariant.price * Number(qty);

            const newTransaction = await Transaction.create({
                transaction_no,
                total_amount,
                active,
                created_user,
                updated_user,
            });

            const newTransactiondetail = await TransactionDetail.create({
                transaction_id: newTransaction.id,
                product_varian_id,
                price: checkProductVariant.price,
                qty,
                subtotal,
                active,
                created_user,
                updated_user,
            });

            if (newTransactiondetail) {
                await ProductVariant.update(
                    { qty: checkProductVariant.qty - qty },
                    {
                        where: { id: product_varian_id },
                    }
                );
            }
            console.log(req.user, ">>>>>>>>>");
            res.status(201).json("transaksi berhasil");
        } catch (error) {
            console.log("errornih", error);
            next(error);
        }
    }
}

module.exports = Controller;
