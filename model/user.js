const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String
})

const User = userSchema.model('User', userSchema);

module.exports = {User};