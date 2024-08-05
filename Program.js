const { Schema, model } = require('mongoose');


const ProgSchema = new Schema({
    description: {type: String},
    level: {type: Number},
    name: {type: String},
    type: {type: String},
    duration: {type: Number},
    seances: [{ type: Schema.Types.ObjectId, ref: 'Seance' }],
    frequency: {type: Number, default: 0},
    is_public: {type: Boolean , default: true},
    
});


//module.exports = model('Program', ProgSchema);

var Program = model('Program', ProgSchema);

module.exports = Program;