const mongoose = require("mongoose");

const TranslatedValueSchema = mongoose.Schema({
    value: { type: String, required: true },
    lang: {
        type: String,
        enum: ["en", "fr"],
        default: "en",
    },
}, { timestamps: { createdAt: 'createDate', updatedAt: 'updateDate' } })

const sessionSchema = mongoose.Schema({
    name: { type: String },
    level: { type: Number },
    duration: { type: Number },
    translated_name: [TranslatedValueSchema],
    description: [TranslatedValueSchema],
    thumbnail: { type: String },
    session_gender: {
        type: String,
        enum: ["MAN", "WOMAN", "BOTH"],
        default: "BOTH",
    },
    exercices: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exercise',
        },
        ex_duration: { type: Number },
        pause_duration: { type: Number },
        order: { type: Number },
    },],
    warmup: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exercise',
        },
        ex_duration: { type: Number },
        order: { type: Number },
    },],
    stretching: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exercise',
        },
        ex_duration: { type: Number },
        order: { type: Number },
    },],
    muscles: [{ type: String }],
    translated_muscles: [[TranslatedValueSchema]],
    group: {
        type: String,
        enum: ['default', 'challenge'],
        default: 'default'

    }

}, { timestamps }
);

module.exports = mongoose.model("new_session", sessionSchema);
