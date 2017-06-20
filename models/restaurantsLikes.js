var mongoose = require('mongoose'),
     Schema = mongoose.Schema;

var restaurantsLikesSchema = new Schema({
    id: { type:Number, required: true },
    venueId: {type:String},
    like: { type: Number },
    dislike: { type: Number },
    description: {type: String}

});

module.exports = mongoose.model('RestaurantsLikes',restaurantsLikesSchema)

