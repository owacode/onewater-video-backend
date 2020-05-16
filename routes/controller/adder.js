//  MongoDB Models
const VideoPosted= require('../../model/video_posted');
const AuthorVideoPosted= require('../../model/author_posted_video');

// Controllers
const deleteController= require('./delete');
const updateController= require('./update');
class AdderOperationController{
  // This methord is for posting a new blog
  //Initially Posting a New Blog will be saved in notapproved collection
    addVideo(value){
      return new Promise((resolve, reject)=>{

        const video = new VideoPosted({
          title:value.title,
          image:value.image,
          category:value.category,
          date_added:getTime(),
          video_link:value.video_link,
          desc:value.desc,
          likes:value.likes,
          views:value.views,
          video_no:0
        })

        video.save()
            .then((result)=> {
              // updateController.updateViewsAndLikes(result._id);
              console.log(result,'added');
              resolve(result);
             })
            .catch(err=> reject(err));
      })
    }

    addAuthorVideo(value){
      return new Promise((resolve, reject)=>{
        const video = new AuthorVideoPosted({
          title:value.title,
          video_link:value.video_link,
          desc:value.desc,
          date_added:getTime(),
          video_no:0
        })
        video.save()
            .then((result)=> {
              resolve(result);
             })
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

module.exports= new AdderOperationController();

