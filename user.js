const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const crypto = require('crypto');

const userSchema = mongoose.Schema({
    //_id: mongoose.Types.ObjectId,
    fname: { type: String },
    lname: { type: String },
    email: {
        type: String,
        required: true,
        match: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    },
    pwd: { type: String, required: true },
    photo: { type: String },
    gender: { type: String },
    //birthdate: { type: String},
    age: { type: Number },
    flaglogged: { type: String },
    weight: { type: Number },
    height: { type: Number },
    pratique: { type: String },
    //objectifs:[{type: String}],
    goal: { type: String },
    level: { type: String },
    device_id: [{ type: String }],
    payments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }],
    camera_id: { type: String, default: null },
    resetPasswordToken: {
        type: String,
        required: false
    },

    resetPasswordExpires: {
        type: Date,
        required: false
    },
},

    { timestamps: true }
);

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.pwd);
};

userSchema.methods.getResetPasswordToken = function () {

    //Generating Token 
    const resetToken = crypto.randomBytes(20).toString("hex");

    //Hashing and add to userSchema 
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpires = Date.now() + 15 * 60 * 1000;

    return resetToken;
};

userSchema.methods.generatePasswordReset = function () {
    this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
};
module.exports = mongoose.model("User", userSchema);

