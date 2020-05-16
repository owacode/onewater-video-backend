//  MongoDB Models
const VideoPosted= require('../../model/video_posted');
const PrimeVideo= require('../../model/prime_video');

class UpdateController{
  // Updating a Blog
  updateViewsAndLikes(values){
    console.log(values,'likesssssssssss');
    return new Promise((resolve, reject)=> {

      VideoPosted.findByIdAndUpdate({_id:values.id},{ $set:
              {
                likes:values.likeCount,
                views:values.viewCount,
              }})
      .then(response=> {console.log('updated video likes and views'); resolve(response)})
      .catch(err=> reject(err));
    })
  }

  primeVideo(link) {
    return new Promise((resolve, reject)=> {

      PrimeVideo.findByIdAndUpdate({_id:"5e9f3fc61c9d440000238345"},{ $set:
              {
                video_link:link,
                date_added:getTime()
              }})
      .then(response=> {console.log('updated video likes and views'); resolve(response)})
      .catch(err=> reject(err));
    })
  }

}

function getTime(){
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  var currentTime = new Date();

  var currentOffset = currentTime.getTimezoneOffset();

  var ISTOffset = 330;   // IST offset UTC +5:30

  var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

  // ISTTime now represents the time in IST coordinates
  return ISTTime;
}

module.exports= new UpdateController();
