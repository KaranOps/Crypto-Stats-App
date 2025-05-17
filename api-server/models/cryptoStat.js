const mongoose = require('mongoose');

const cryptoStatSchema = new mongoose.Schema({
    coin : {   
        type: String,
        required: true,
    },
    price: {  
        type: Number,
        required: true,
    },
    marketCap: { 
        type: Number,
        required: true,
    },
    change24th: {  
        type: Number,
        required: true,
    },
    createdAt: { 
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('cryptoStat', cryptoStatSchema);