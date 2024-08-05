// name, level duration 
import mongoose, { Schema, Document, Types } from 'mongoose';

interface TranslatedValue {
    value: string;
    lang: 'en' | 'fr';
    createDate?: Date;
    updateDate?: Date;
}

interface ExerciseDetails {
    _id: Types.ObjectId;
    ex_duration: number;
    pause_duration?: number;
    order: number;
}

interface ISession extends Document {
    name: string;
    level: number;
    duration: number;
    translated_name: TranslatedValue[];
    description: TranslatedValue[];
    thumbnail: string;
    session_gender: 'MAN' | 'WOMAN' | 'BOTH';
    exercices: ExerciseDetails[];
    warmup: ExerciseDetails[];
    stretching: ExerciseDetails[];
    muscles: string[];
    translated_muscles: TranslatedValue[][];
    group: 'default' | 'challenge';
    createdAt: Date;
    updatedAt: Date;
}

const TranslatedValueSchema = new Schema<TranslatedValue>({
    value: { type: String, required: true },
    lang: {
        type: String,
        enum: ["en", "fr"],
        default: "en",
    },
}, { timestamps: { createdAt: 'createDate', updatedAt: 'updateDate' } });

const ExerciseDetailsSchema = new Schema<ExerciseDetails>({
    _id: { type: Schema.Types.ObjectId, ref: 'Exercise', required: true },
    ex_duration: { type: Number, required: true },
    pause_duration: { type: Number },
    order: { type: Number, required: true },
});

const sessionSchema = new Schema<ISession>({
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
   // translated_muscles: { type: [[TranslatedValueSchema]], required: true },
    group: {
        type: String,
        enum: ['default', 'challenge'],
        default: 'default',
    },
}, { timestamps: true });

export default mongoose.model<ISession>("Session", sessionSchema);
