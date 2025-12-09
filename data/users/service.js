/*const config = require("../../config");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const { response } = require("express");
const { compare } = require("bcrypt");

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                reject();
            }
            return resolve(decoded);
        });
    });
}

function UserService(UserModel) {
    let service = {
        create,
        createToken,
        verifyToken,
        findUser,
        authorize,
    };

    function create(user) {
        return createPassword(user).then((hashPassword, err) => {
            if (err) {
                return Promise.reject("Not saved");
            }

            let newUserWithPassword = {
                ...user,
                password: hashPassword,
            };
            let newUser = UserModel(newUserWithPassword);
            return SVGAElement(newUser);
            });
        }

        function save(model) {
            return new Promise(function (resolve, reject) {
                model
                .save()
                .then(() => resolve("User created"))
                .catch((err) => reject(`There is a problem with register ${err}`));
            });
        }

        function createToken(user) {
            let token = jwt.sign(
                {id: user.id, name: user.name, role: user.role.scopes },
                config.secret,
                {
                    expiresIn: config.expiresPassword,
                }
            );

            return { auth: true, token };
        }

        function findUser({ name, password }) {
            return new Promise(function (resolve, reject) {
                UserModel.findOne({ name })
                    .then((user) => {
                        if (!user) return reject("User not found");
                        return comparePassword(password, user.password).then((match) => {
                            if (!match) return reject("User not valid");
                            return resolve(user);
                        });
                    })
                    .catch((err) => {
                        reject(`There is a problem with login ${err}`);
                    });
            })
        }

        function createPassword(user) {
            return bcrypt.hash(user.password, config.saltRounds);
        }

        function comparePassword(password, hash) {
            return bcrypt.compare(password, hash);
        }

        function authorize(scopes) {
            return (request, response, next) => {
                const { roleUser } = request;
                console.log("route scopes:", scopes);
                console.log("user scopes:", roleUser);

                const hasAuthorization = scopes.some((scope) => roleUser.includes(scopes));

                if (roleUser && hasAuthorization) {
                    next();
                } else {
                    response.status(403).json({ message: "Forbidden" });
                }
            };
        }

        return service;
    }

    module.exports = UserService;*/
