const User = require("../models/User");

const createUser = async ( req, res ) => {
    //const { name, email, password } = req.body;

    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).json({
            ok: true,
            message: 'User was created'
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'This is not a valid user'
        });
    }
}

const loginUser = ( req, res ) => {
    console.log(req.body);
    res.json({
        ok: true,
        login: true
    });
}

module.exports = {
    createUser,
    loginUser
}