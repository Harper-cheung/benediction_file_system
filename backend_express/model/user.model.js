const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    _id: {type: Schema.Types.ObjectId, required: true, unique:true},
});


// Export the model
module.exports = mongoose.model('user', UserSchema);