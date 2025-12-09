const jwt = require("jsonwebtoken");
const config = require("../../config");
const bcrypt = require("bcrypt");

function UserControler(UserModel) {

    let controller = {
        create,
        findAll,
        findById,
        update,
        removeById,
        authorize,
        createToken,
        createPassword,
        comparePassword,
        verifyToken,
        findUser
    }

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

    function update (id,user) {
        return new Promise(function (resolve, reject) {
            UserModel.findByIdAndUpdate(id,user)
            .then((user) => resolve(user))
            .catch((err) => reject(err));
        });
    }

    function removeById (id){
        return new Promise(function (resolve, reject) {

            UserModel.findByIdAndRemove(id, user)
            .then((user) => resolve(player))
            .catch((err) => reject(err));
        });
    }

    function findById(id) {
        return new Promise(function (resolve, reject) {
            UserModel.findById(id)
            .then((user) => resolve(user))
            .catch((err) => reject(err));
        });
    }

    function findAll(){
        return new Promise(function (resolve, reject) {
            UserModel.find({})
            .then((user) => resolve(user))
            .catch((err) => reject(err));
        });
    }

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
            return save(newUser);
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

    function save (newUser) {
        return new Promise(function (resolve, reject) {
            newUser.save()
            .then((err) => resolve('Player created'))
            .catch((err) => reject(err));
        });
    }

    function authorize(scopes) {
        return (req, res, next) => {
            const userScopes = req.user.scopes;
            const hasScope = scopes.some((scope) => userScopes.includes(scope));

            if (!hasScope) {
                return res.status(403).send({
                    auth: false,
                    message: "You don't have the required scope(s) to access this resourse.",
                });
            }
            next();
        };
    };
    return controller;
}

module.exports = UserControler;