import mongoose from 'mongoose';

const TranslatedValueSchema = new mongoose.Schema({
    value: { type: String, required: true },
    lang: {
        type: String,
        enum: ["en", "fr"],
        default: "en",
    },
}, { timestamps: { createdAt: 'createDate', updatedAt: 'updateDate' } });

const ExerciseDetailsSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise', required: true },
    ex_duration: { type: Number, required: true },
    pause_duration: { type: Number },
    order: { type: Number, required: true },
});

const sessionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { type: Number, required: true },
    duration: { type: Number, required: true },
    translated_name: { type: [TranslatedValueSchema], required: true },
    description: { type: [TranslatedValueSchema], required: true },
    thumbnail: { type: String },
    session_gender: {
        type: String,
        enum: ["MAN", "WOMAN", "BOTH"],
        default: "BOTH",
    },
    //exercices: { type: [ExerciseDetailsSchema], required: true },
    //warmup: { type: [ExerciseDetailsSchema], required: true },
    //stretching: { type: [ExerciseDetailsSchema], required: true },
    muscles: [{ type: String }],
    //translated_muscles: { type: [[TranslatedValueSchema]], required: true },
    group: {
        type: String,
        enum: ['default', 'challenge'],
        default: 'default',
    },
}, { timestamps: true });

export default mongoose.model('Session', sessionSchema);
