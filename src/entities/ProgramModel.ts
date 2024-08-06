import mongoose from 'mongoose';

const ProgSchema = new mongoose.Schema({
    description: { type: String },
    level: { type: Number },
    name: { type: String },
    type: { type: String },
    duration: { type: Number },
    seances: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Seance' }
    ],
    frequency: { type: Number, default: 0 },
    is_public: { type: Boolean, default: true }
});

export default mongoose.model('Program', ProgSchema);
