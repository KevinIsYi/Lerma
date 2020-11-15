const createUser = ( req, res ) => {
    res.json({
        ok: true
    });
}

const loginUser = ( req, res ) => {
    res.json({
        ok: true,
        login: true
    });
}

module.exports = {
    createUser,
    loginUser
}