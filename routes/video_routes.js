const express= require('express');
const routes= express.Router();
// Controllers
const adderController= require('./controller/adder');
const deleteController= require('./controller/delete');
const updateController= require('./controller/update');
const fetchController= require('./controller/fetch');

// Route for Posting new VIdeo
routes.post('/postvideo' ,(req,res)=>{
  console.log(req.body);
  adderController.addVideo(req.body)
  .then(result=> res.status(200).json({
    status:"success",
    msg:"Video is added successfully",
    payload:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})

// Route for Posting new AUthor VIdeo
routes.post('/post-authorvideo' ,(req,res)=>{
  console.log(req.body);
  adderController.addAuthorVideo(req.body)
  .then(result=> res.status(200).json({
    status:"success",
    msg:"Video is added successfully",
    payload:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})

// Route for Getting All Posted Videos
routes.get('/videos', (req, res)=>{
  console.log(req.params,'mohit');
  fetchController.getAllVideos(req.params)
  .then(result => res.status(200).json({
    status:"success",
    msg:"Videos Fetch Successfully",
    result:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})

// Route for Getting All Posted Videos
routes.get('/author-videos', (req, res)=>{
  console.log(req.params,'mohit');
  fetchController.getAuthorVideo()
  .then(result => res.status(200).json({
    status:"success",
    msg:"Videos Fetch Successfully",
    result:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})

// Route for Getting Single Posted Videos
routes.get('/author-videos/:id', (req, res)=>{
  fetchController.getAuthorSingleVideo(req.params.id)
  .then(result => res.status(200).json({
    status:"success",
    msg:"Videos Fetch Successfully",
    result:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})

// Route for Getting a Single Video
routes.get('/video/:id', (req, res)=>{
  fetchController.getSingleVideo(req.params.id)
  .then(result => res.status(200).json({
    status:"success",
    msg:"Video Fetch Successfully",
    result:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})

// Route for Getting a Video Likes
routes.get('/videobylikes', (req, res)=>{
  fetchController.getVideoByLikes()
  .then(result => res.status(200).json({
    status:"success",
    msg:"Video Fetch Successfully",
    result:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})

// Route for Getting a Video Views
routes.get('/videobyviews', (req, res)=>{
  fetchController.getVideoByViews()
  .then(result => res.status(200).json({
    status:"success",
    msg:"Video Fetch Successfully",
    result:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})

// Route for Getting a Video Views
routes.get('/categoryvideos/:category', (req, res)=>{
  fetchController.getCategoryVideoByLatest(req.params.category)
  .then(result => res.status(200).json({
    status:"success",
    msg:"Video Fetch Successfully",
    result:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})

// Route for Getting a Video Views
routes.get('/homecategoryvideos/:category', (req, res)=>{
  fetchController.getHomeCategoryVideoByLatest(req.params.category)
  .then(result => res.status(200).json({
    status:"success",
    msg:"Video Fetch Successfully",
    result:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})

// Route for Getting a Video Views
routes.get('/categoryvideoslikes/:category', (req, res)=>{
  fetchController.getCategoryVideoByLikes(req.params.category)
  .then(result => res.status(200).json({
    status:"success",
    msg:"Video Fetch Successfully",
    result:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})

// Route for Getting a Video Views
routes.get('/categoryvideosviews/:category', (req, res)=>{
  fetchController.getCategoryVideoByViews(req.params.category)
  .then(result => res.status(200).json({
    status:"success",
    msg:"Video Fetch Successfully",
    result:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})

// Route for Updating a Video
routes.patch('/update', (req, res)=>{
  updateController.updateBlog(req.body)
  .then(result => res.status(200).json({
    status:"success",
    msg:"Video Updated Successfully",
    result:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})

// Update Likes and Views of video
routes.patch('/likesandviews', (req, res)=>{
  updateController.updateViewsAndLikes(req.body)
  .then(result => res.status(200).json({
    status:"success",
    msg:"Video Likes and Views Updated Successfully",
    result:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})

// Update Likes and Views of video
routes.patch('/primevideo', (req, res)=>{
  updateController.primeVideo(req.body.link)
  .then(result => res.status(200).json({
    status:"success",
    msg:"Prime Video Updated Successfully",
    result:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})

routes.get('/primevideo', (req, res)=>{
  fetchController.getPrimeVideo()
  .then(result => res.status(200).json({
    status:"success",
    msg:"Prime Video Fetch Successfully",
    result:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})

// Route for Deleteing a Video
routes.delete('/deletevideo/:id', (req, res)=>{
  deleteController.deleteVideo(req.params.id)
  .then(result => res.status(200).json({
    status:"success",
    msg:"Video Deleted Successfully",
    result:result
  }))
  .catch(err =>res.status(200).json({
    status:"error",
    payload:err
  }));
})


module.exports= routes;
