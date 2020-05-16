//  MongoDB Models
const VideoPosted = require('../../model/video_posted');
const PrimeVideo= require('../../model/prime_video');
const AuthorVideoPosted = require('../../model/author_posted_video');

class FetchController {
  // Fetching all Video from DB
  getAllVideos(value) {
    console.log(value, 'aaa')
    return new Promise((resolve, reject) => {
      const query = VideoPosted.find().sort({ "date_added": -1 });
      const pagesize = +value.pagesize;
      const currentpage = +value.currentpage;
      let fetchblogs;

      if (pagesize && currentpage) {
        query
          .skip(pagesize * (currentpage - 1))
          .limit(pagesize);
      }
      query
        .then(documents => {
          console.log(documents, 'qqqqaaaaadsdw');
          fetchblogs = documents;
          return VideoPosted.count();
        })
        .then(totalBlogs => resolve(fetchblogs, totalBlogs))
        .catch(err => reject(err));
    })
  }

  getAuthorVideo() {
    return new Promise((resolve, reject) => {
      AuthorVideoPosted.find({})
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        })
    })
  }

  getPrimeVideo() {
    return new Promise((resolve, reject) => {
      PrimeVideo.findById({_id: "5e9f3fc61c9d440000238345"})
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        })
    })
  }

  getAuthorSingleVideo(id) {
    return new Promise((resolve, reject) => {
      AuthorVideoPosted.findById({ _id: id })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        })
    })
  }

  getSingleVideo(id) {
    return new Promise((resolve, reject) => {
      VideoPosted.findById({ _id: id })
        .then(result => {
          // console.log("Video ")
          resolve(result);
        })
        .catch(err => {
          console.log("Error in fetching video..", err)
          reject(err);
        })
    })
  }


  getVideoByLikes() {
    return new Promise((resolve, reject) => {
      VideoPosted.find({}).sort({ "likes": -1 })
        .then(result => {
          // console.log("Video ")
          resolve(result);
        })
        .catch(err => {
          console.log("Error in fetching video..", err)
          reject(err);
        })
    })
  }

  getCategoryVideoByLatest(category) {
    return new Promise((resolve, reject) => {
      VideoPosted.find({ category: category }).sort({ "date_added": -1 })
        .then(result => {
          // console.log("Video ")
          resolve(result);
        })
        .catch(err => {
          console.log("Error in fetching video..", err)
          reject(err);
        })
    })
  }

  getHomeCategoryVideoByLatest(category) {
    return new Promise((resolve, reject) => {
      VideoPosted.find({ category: category }).sort({ "date_added": -1 }).limit(6)
        .then(result => {
          // console.log("Video ")
          resolve(result);
        })
        .catch(err => {
          console.log("Error in fetching video..", err)
          reject(err);
        })
    })
  }

  getCategoryVideoByLikes(category) {
    return new Promise((resolve, reject) => {
      VideoPosted.find({ category: category }).sort({ "likes": -1 })
        .then(result => {
          // console.log("Video ")
          resolve(result);
        })
        .catch(err => {
          console.log("Error in fetching video..", err)
          reject(err);
        })
    })
  }

  getCategoryVideoByViews(category) {
    return new Promise((resolve, reject) => {
      VideoPosted.find({ category: category }).limit(2).sort({ "views": -1 })
        .then(result => {
          // console.log("Video ")
          resolve(result);
        })
        .catch(err => {
          console.log("Error in fetching video..", err)
          reject(err);
        })
    })
  }

  getVideoByViews() {
    return new Promise((resolve, reject) => {
      VideoPosted.find({}).sort({ "views": -1 })
        .then(result => {
          // console.log("Video ")
          resolve(result);
        })
        .catch(err => {
          console.log("Error in fetching video..", err)
          reject(err);
        })
    })
  }

}

module.exports = new FetchController()


