const UserItem = require('../models/UserItems');
const ItemSchema = require('../models/Items');

const insertInShoppingCart = async ( req, res ) => {
    
    const { body } = req;
    const { userId, itemId } = body;

    const userItem = new UserItem(body);
<<<<<<< HEAD
    console.log(userItem);
=======
>>>>>>> 5e2d99961e5a001484f43b4d1b7ca76d4e8ce4fb
    userItem.user = userId;
    userItem.item = itemId;

    try {
<<<<<<< HEAD
        await userItem.save();
=======
        userItem.save();
>>>>>>> 5e2d99961e5a001484f43b4d1b7ca76d4e8ce4fb
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

<<<<<<< HEAD
        for (const { item, quantity } of itemsId) {
            const currentItem = await ItemSchema.findById(item);
            cartItems.push( {
                    ...currentItem._doc,
                    quantity
                }
            );
=======
        for (const { item } of itemsId) {
            cartItems.push(await ItemSchema.findById(item) );
>>>>>>> 5e2d99961e5a001484f43b4d1b7ca76d4e8ce4fb
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