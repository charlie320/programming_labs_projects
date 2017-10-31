import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { User } from '../user';
import { Post } from '../post';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  currentUser: User = new User();
  postsOwner: User = new User();
  posts = [];
  post: Post = new Post();
  errors: string[] = [];
  newBicycle: Post = new Post();
  updatedBicycle: Post = new Post();
  user_id: any = null;

  constructor(
    private _userService: UserService,
    private _postService: PostService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._userService.session((res) => {
      if (res.status === false) {
        this._router.navigateByUrl('/');
      } else {
        this.currentUser = res;
      }
    });
    this._activatedRoute.params.subscribe(param => {
      this.user_id = param.id;
    })
    this.getPosts();
  }

  getPosts() {
    this._userService.getPosts(postsOwner => this.postsOwner = postsOwner);
  }

  createPost() {
    console.log("Inside the createPost method.")
    this.errors = [];
    this.newBicycle.user = this.currentUser;
    console.log("newBicycle with current user:  ", this.newBicycle);
    this._postService.create(
      this.newBicycle,
      data => {
        if(data.errors){
          for (const key of Object.keys(data.errors)) {
            const error = data.errors[key];
            this.errors.push(error.message);
            console.log(this.errors);
          }
        } else {
          this.newBicycle = new Post();
          this.getPosts();
          this._router.navigateByUrl('/listings');
        }
      }
    );
  }

  updatePost(post) {
    console.log("Inside the updatePost method: listings.component");
    console.log(post);
    // return this._postService.update(post)
    // .then(bike => {
    //   console.log(post);
    // })
    // .catch(err => { console.log(err) })

    return this._postService.update(post, data => {
      if(data.errors) {
        console.log (data.errors);
      } else {
        this.post = data;
        console.log("Successfully updated the bicycle post!");
        this.getPosts();
      }
    })

  }

  destroyPost(id: string, idx: number) {
    this._postService.destroy(id, res => {
      this.postsOwner.posts.splice(idx,1);
    });
    this.getPosts();
    this._router.navigateByUrl('/listings');
  }

}
