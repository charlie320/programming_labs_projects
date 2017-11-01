import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { User } from '../user';
import { Post } from '../post';
import { NgForm } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:8000/upload_photo';

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

  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

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
    this.forFileUpload();
    this.getPosts();

  }

  sendUpload(id: any) {
    this.uploader.options.additionalParameter = {'post_id': id};
    this.uploader.uploadAll();
    this.getPosts();
  }

  forFileUpload() {
    // override the onAfterAddingFile property of the uploader so it doesn't authenticate with credentials.
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // override the onCompleteItem property of the uploader so we are able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
    this.getPosts();
    };
  }

  getPosts() {
    this._userService.getPosts(postsOwner => this.postsOwner = postsOwner);
  }

  createPost() {
    this.errors = [];
    this.newBicycle.user = this.currentUser;
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
