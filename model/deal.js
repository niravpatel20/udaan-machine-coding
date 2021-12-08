const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    noOfItems: Number,
    dealPrice: Number,
    endTime: Date,
    isActive: Boolean,
    item:  [{ type: Schema.Types.ObjectId, ref: 'Item' }]
})

const Deal = mongoose.Schema('Deal', dealSchema);

module.exports = {Deal};