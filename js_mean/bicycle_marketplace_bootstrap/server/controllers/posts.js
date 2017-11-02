// import mongoose
const mongoose = require('mongoose');
// import multer
const multer = require('multer');
const path = require('path');
const DIR = __dirname + '/../uploads/';
const upload = multer({dest: DIR}).single('photo');
const fs = require('fs');

// import Post model
const Post = mongoose.model('Post');
const User = mongoose.model('User');

class PostsController {

  index(req, res){
    // Post.find({}, (err, Posts) => {
    // Post.find({}).sort('name').exec((err, posts) => {
    Post.find({}).sort('name').populate({ path: 'user', model: 'User' }).exec((err, posts) => {
      if(err){
        return res.json(err);
      }
      return res.json(posts);
    })
  }

  show(req, res){
    Post.findById(req.params.id, (err, post) => {
      if(err){
        return res.json({error: '404 - Post not found' });
      }
      return res.json(post);
    })
  }

  // upload_photo method
  upload_photo(req,res) {
    var path;

    upload(req, res, function(err) {
      if(err) {
        return res.json({ status: 'Cound not save file'});
      }
      Post.findById(req.body.post_id, (err, post) => {
        console.log(post._id);
        if(err) {
          return res.json(err);
        }
        path = `/Users/Charlie/Documents/Programming/programming_labs_projects/js_mean/bicycle_marketplace_bootstrap/server/uploads/${post.photo}`;
      // });
        Post.findByIdAndUpdate(req.body.post_id, { $set: { photo: req.file.filename } }, {new: true}, (err, post) => {
          if(err) {
            return res.json(err);
          }
          fs.unlink(path, (e) => {
            if(e) {
              console.log("No file found.");
            } else {
              console.log("Successfully deleted old photo file.")
            }
          });
        });
        return res.json(post);
      });
    })
  }

  create(req, res){
    Post.create(req.body, (err, post) => {
      if(err){
        return res.json(err);
      }
      User.findByIdAndUpdate(post.user, { $push: { posts: post._id } }, { new: true }, (err, user) => {
        if(err) {
          return res.json(err);
        }
        return res.json(post);
      })
    })
  }

  update(req, res){
    Post.findByIdAndUpdate(req.params.id, { $set : req.body }, { runValidators: true, new: true }, (err, post) => {
      if(err){
        return res.json(err);
      }
      return res.json(post);
    })
  }

  destroy(req, res){
    // Post.findByIdAndRemove(req.params.id, (err, result) => {
    Post.findById(req.params.id, (err, result) => {
      if(err){
        return res.json(err);
      }
      if(result.user == req.session.user_id){
        result.remove();
        User.findByIdAndUpdate(result.user, { $pull: { posts: req.params.id} }, {new: true}, (err) => {
          if(err){
            return res.json(err);
          }
          return res.json({"success": "Successfuly deleted post and pulled from user"});
        })
      }  //  end if() authorization check
      else {
        return res.json({ status : false })
      }
    });
  }
}

module.exports = new PostsController();
