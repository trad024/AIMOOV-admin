// name , gender, type, level duration , is_public
import { Schema, model, Document } from 'mongoose';

interface IProgram extends Document {
    description: string;
    level: number;
    name: string;
    type: string;
    duration: number;
    seances: Schema.Types.ObjectId[];
    frequency: number;
    is_public: boolean;
}

const ProgSchema = new Schema<IProgram>({
    description: { type: String },
    level: { type: Number },
    name: { type: String },
    type: { type: String },
    duration: { type: Number },
    seances: [
        { type: Schema.Types.ObjectId, ref: 'Seance' }
    ],
    frequency: { type: Number, default: 0 },
    is_public: { type: Boolean, default: true }
});

const Program = model<IProgram>('Program', ProgSchema);

export default Program;
