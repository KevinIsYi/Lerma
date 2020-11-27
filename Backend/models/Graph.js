const { Schema, model } = require('mongoose');

const GraphSchema = Schema({
    item1: {
        type: String,
        required: true
    },
    item2: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
});

module.exports = model( 'Graph', GraphSchema );