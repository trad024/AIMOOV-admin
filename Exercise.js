const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({

  id_Ex: { type: String }, // squat
  //order: {type: Number},
  max_score: { type: Number, default: 0 },
  min_score: { type: Number, default: 0 },
  nv_diff: { type: Number, default: 0 },
  zone_corps: [{ type: String }],
  type: { type: String }, // "warmup+workout"
  avatar: { type: String, default: '' },
  muscles: { type: [String], default: [] }, // ["triceps", "biceps"]
  group: {
    type: String,
    enum: ['default', 'challenge'],
    default: 'default'

  }

}, { timestamps });

//exerciseSchema.index({ sr_no: -1 });

const Exercise = mongoose.model(
  'Exercise',
  exerciseSchema
);

module.exports = Exercise;