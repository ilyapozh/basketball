const mongoose = require('mongoose');

const bsPlayerSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
    },
    team: {
        type: String,
        required: true,
        minlength: 2,
    }
});

module.exports = mongoose.model('bsplayer', bsPlayerSchema);