const { Schema, model } = require('mongoose');

const UserItem = Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        item: {
            type: Schema.Types.ObjectId,
<<<<<<< HEAD
            ref: 'Item',
            required: true
        },
        quantity: {
            type: Number,
=======
            red: 'Item',
>>>>>>> 5e2d99961e5a001484f43b4d1b7ca76d4e8ce4fb
            required: true
        }
    }
)

module.exports = model('UserItem', UserItem);