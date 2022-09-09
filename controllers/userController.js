const User = require("../models/userModel");

exports.signUp = async(req, res, next) => {
    try {
        const newUser = await createUserObbj(req);
        const savedUser = await User.create(newUser);
        return res.status(200).send({message: "User created Successfully", user: savedUser});
    } catch (err) {
        console.log(err);
        return res.status(400).send({message: "Unable to create user", error: err});
    }
};

exports.logIn = async(req, res, next) => {
    return res.status(200).send({message:"hitting the login route"});
};

exports.updateUser = async(req, res, next) => {
    return res.status(200).send({message:"hitting the update user route"});
};

exports.deleteUser = async(req, res, next) => {
    return res.status(200).send({message:"hitting the delete user route"});
};

exports.data = async(req, res, next) => {
    return res.status(200).send({message:"hitting the data route"});
};

const createUserObbj = async(req) => {
    return{
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
    }
}