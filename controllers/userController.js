exports.signUp = async(req, res, next) => {
    return res.status(200).send({message:"hitting the signUp route"});
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