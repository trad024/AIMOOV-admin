import mongoose from 'mongoose';

const ExerciseSchema = new mongoose.Schema({
    id_Ex: { type: String, required: true },
    max_score: { type: Number, default: 0 },
    min_score: { type: Number, default: 0 },
    nv_diff: { type: Number, default: 0 },
    zone_corps: [{ type: String }],
    type: { type: String, required: true }, // e.g., "warmup+workout"
    avatar: { type: String, default: '' },
    muscles: { type: [String], default: [] }, // e.g., ["triceps", "biceps"]
    group: {
        type: String,
        enum: ['default', 'challenge'],
        default: 'default'
    }
}, { timestamps: true });

export default mongoose.model('Exercise', ExerciseSchema);
