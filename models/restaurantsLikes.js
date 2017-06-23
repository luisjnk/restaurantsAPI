var mongoose = require('mongoose'),
     Schema = mongoose.Schema;

var restaurantsLikesSchema = new Schema({
    venueId: {type:String},
    like: { type: Number },
    dislike: { type: Number },
    description: {type: String},
    title: {type: String},
    name: {type: String},
    date: {type: String}
});

module.exports = mongoose.model('RestaurantsLikes',restaurantsLikesSchema)

