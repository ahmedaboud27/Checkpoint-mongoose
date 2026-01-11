const mongoose = require('mongoose');
const schiema = mongoose.Schema;

const userSchiema = new schiema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    isadmin: {type: Boolean, default: false}
    // img:String
});
const user = mongoose.model('users', userSchiema);
module.exports = user;