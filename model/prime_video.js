const mongoose= require('mongoose');

const video = mongoose.Schema({
  date_added:{ type: Date},
  video_link:{ type:String, require:true},
});

module.exports = mongoose.model('PrimeVideo', video, 'PrimeVideo');
