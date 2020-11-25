const UserItem = require('../models/UserItems');
const ItemSchema = require('../models/Items');

const insertInShoppingCart = async ( req, res ) => {
    
    console.log("Esto llegó ", req.body);
    const { body } = req;
    const { userId, itemId } = body;

    if (!userId || !itemId) {
        return res.status(400).json({
            ok: false,
            message: 'Information was not received as needed'
        });
    }

    const userItem = new UserItem(body);

    userItem.user = userId;
    userItem.item = itemId;

    try {
        const prevItem = await UserItem.find({ item: itemId })
        
        if (prevItem.length > 0) {
            /*
            const item = prevItem[0];
            const { quantity, _id } = item;
            item.quantity = quantity + 1;

            await UserItem.findOneAndUpdate({ _id }, item);
            */

            return res.status(200).json({
                ok: true,
                message: 'User already has this item in his cart'
            })
        }

        await userItem.save();
        res.json({
            ok: true
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Cannot insert in DB'
        })
    }
}

const getCartItems = async ( req, res ) => {
    console.log(req.headers);

    const { userid } = req.headers;

    if (!userid) {
        return res.status(400).json({
            ok: false
        })
    }

    try {
        const itemsId = await UserItem.find({ user: userid });
        const cartItems = [];

        for (const { item, quantity } of itemsId) {
            const currentItem = await ItemSchema.findById(item);
            cartItems.push( {
                    ...currentItem._doc,
                    quantity
                }
            );
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