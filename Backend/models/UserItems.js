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
            ref: 'Item',
            required: true
        },
        quantity: {
            type: Number,
            red: 'Item',
            required: true
        }
    }
)

module.exports = model('UserItem', UserItem);