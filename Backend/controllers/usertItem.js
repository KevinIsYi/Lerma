const UserItem = require('../models/UserItems');
const ItemSchema = require('../models/Items');

const insertInShoppingCart = async ( req, res ) => {
    
    const { body } = req;
    const { userId, itemId } = body;

    const userItem = new UserItem(body);
    userItem.user = userId;
    userItem.item = itemId;

    try {
        userItem.save();
        res.json({
            ok: true
        });
        
    } catch (error) {
        console.log(error);
        res.status.json({
            ok: false,
            message: 'Cannot insert in DB'
        })
    }
}

const getCartItems = async ( req, res ) => {
    const { body } = req;
    const { userId } = body;

    try {
        const itemsId = await UserItem.find({ user: userId });
        const cartItems = [];

        for (const { item } of itemsId) {
            cartItems.push(await ItemSchema.findById(item) );
        }
        
        res.json({
            ok: true,
            cartItems
        })
                
    } catch (error) {
        console.log(error);
        res.json({
            ok: false
        })
    }
}

module.exports = {
    insertInShoppingCart,
    getCartItems
}