const mongoose= require('mongoose');
// Package to make a field of table auto-increasement
const auoInCrease = require('mongodb-autoincrement');
/**
 * Create Blog Model
 * Add AutoIncrease Plugin
 */
const blog = mongoose.Schema({
  title:{ type: String,required:true},
  video_link:{ type:String, require:true},
  desc:{ type: String, default:false },
  video_no:{ type:Number},
  date_added:{ type: Date}
}).plugin(auoInCrease.mongoosePlugin, {
  field: 'video_no'
});

module.exports = mongoose.model('AuthorVideoPosted', blog, 'AuthorVideoPosteds');
