const mongoose= require('mongoose');
// Package to make a field of table auto-increasement
const auoInCrease = require('mongodb-autoincrement');
/**
 * Create Blog Model
 * Add AutoIncrease Plugin
 */
const blog = mongoose.Schema({
  title:{ type: String,required:true},
  date_added:{ type: Date},
  video_link:{ type:String, require:true},
  image:{ type:String, require:true},
  desc:{ type: String, default:false },
  category:{ type: String, require:true },
  tags:[],
  likes:{ type: Number},
  views:{ type: Number},
  video_no:{ type:Number}
}).plugin(auoInCrease.mongoosePlugin, {
  field: 'video_no'
});

module.exports = mongoose.model('VideoPosted', blog, 'VideoPosteds');
