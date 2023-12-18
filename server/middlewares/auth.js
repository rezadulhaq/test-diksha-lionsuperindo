const { User } = require("../models/index");
const { decodeToken } = require("../helpers/jwt");

async function authentication(req, res, next) {
    try {
        const access_token = req.headers.access_token;
        if (!access_token) {
            throw { name: "Unauthenticated" };
        }
        const payload = decodeToken(access_token);
        const user = await User.findOne({
            where: {
                username: payload.username,
            },
        });
        if (!user) {
            throw { name: "Unauthenticated" };
        }
        req.user = {
            UserId: user.id,
            username: user.username ? user.username : "Guest",
            role: user.role
        };
        next();
    } catch (error) {
        next(error);
    }
}

async function authenticationCustomer(req, res, next) {
    try {
        let access_token = req.headers.access_token;
        if (!access_token) {
            throw { name: "Unauthenticated" };
        }

        let payload = decodeToken(access_token);

        if (payload.role !== "customer") {
            throw { name: "Forbidden" };
        }

        // let user = await Customer.findByPk(payload.id);

        // if (!user) {
        //     throw { name: "Forbidden" };
        // }

        req.user = {
            id: payload.id,
            role: payload.role,
            username: payload.username,
            email: payload.email,
        };
        next();
    } catch (error) {
        next(error);
    }
}

async function authorizationOnlyAdmin(req, res, next) {
    try {
        if (req.user.role === "administrator") {
            next();
        } else {
            throw { name: "Forbidden" };
        }
    } catch (error) {
        next(error);
    }
}

module.exports = { authentication, authorizationOnlyAdmin };
