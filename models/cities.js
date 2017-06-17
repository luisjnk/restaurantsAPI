var mongoose = require('mongoose'),
     Schema = mongoose.Schema;

var citiesSchema = new Schema({
    id: { type:Number, required: true },
    name: { type: String },
    country: { type: String },
    coord:{
        long: {
            type: Number
        },
        lat:{
            type: Number
        }
    }
});

module.exports = mongoose.model('Cities',citiesSchema)

