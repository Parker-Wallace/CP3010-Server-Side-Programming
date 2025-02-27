const mongoose = require('mongoose')

const bergSighting = mongoose.Schema ({
    mission:{
        type: String,
        required: true
    },
    aircraft:{
        type: String,
        required: true,
        default: "C-GCNA"
    },
    latitude:{
        type: Number,
        reuired: true
    },
    longitude:{
        type: Number,
        reuired: true
    },
    altitude:{
        type: Number,
        reuired: true
    },
    timestamp:{
        type: Date
    },
    bergId:{
        type: String,
        required: true
    },
    iceType:{
        type: String,
        default: "Tabular"
    },
    iceSize:{
        type: Number,
    },
    seaState:{
        type: String,
        default: "Calm"
    },
    seaTemp:{
        type: Number,
    },
    iceGrounded:{
        type: Boolean,
        default: false
    },
    comment:{
        type: String
    },
})

const Berg = mongoose.model("Berg", bergSighting);
module.exports = Berg