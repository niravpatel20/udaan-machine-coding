const mongoose = require('mongoose');

const userDealSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    user:[{ type: Schema.Types.ObjectId, ref: 'User' }],
    deal:[{ type: Schema.Types.ObjectId, ref: 'Deal' }]
})

const UserDeal = mongoose.model('UserDeal', userDealSchema);

module.exports = { UserDeal};