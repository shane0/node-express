const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    // removing because this is provided by the plugin below?
    // firstname: {
    //     type: String,
    //     default: ''
    // },
    // lastname: {
    //     type: String,
    //     default: ''
    // },
    admin: {
        type: Boolean,
        default: false
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);