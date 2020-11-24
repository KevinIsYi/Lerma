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

const loginUser = async ( req, res ) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(400).json({
                ok: false,
                message: "Credentials don't match"
            });
        }

        const { _id } = user;

        res.json({
            ok: true,
            id: _id
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Failed at connecting to DB'
        })
    }
}

module.exports = {
    createUser,
    loginUser
}