// import mongoose
const mongoose = require('mongoose');
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
    console.log("This is req.params.id:  ", req.params.id);
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
