'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const GemSchema = Schema({
    name: String,
    price: {
        type: Number,
        default: 0
    },
    description: String,
    images: String,
    stock: Number,
    disscounts: {
        type: Number,
        enum: [10,15,25,35]
    },
    reviews:{
        stars: [ {type : Number }], 
        comments:[{ type: String}], 
        author: [{ type: String }]
    }
})

module.exports = mongoose.model('gem', GemSchema)