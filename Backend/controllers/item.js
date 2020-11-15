const Item = require('../models/Items');

const createItem = async ( req, res ) => {
    const item = new Item(req.body);

    try {
        await item.save();
        res.status(201).json({
            ok: true,
            message: 'Item was created'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Item cannot be created'
        });
    }
}

module.exports = {
    createItem
};