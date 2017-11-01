import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { User } from '../user';
import { Post } from '../post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  currentUser: User = new User();
  posts = [];

  constructor(
    private _userService: UserService,
    private _postService: PostService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._userService.session((res) => {
      if (res.status === false) {
        this._router.navigateByUrl('/');
      } else {
        this.currentUser = res;
      }
    });
    this.getPosts();
  }

  getPosts(){
    this._postService.index(posts => this.posts = posts);
  }

  destroyPost(id: string, idx: number) {
    this._postService.destroy(id, res => {
      this.posts.splice(idx,1);
    });
    this.getPosts();
  }

  logout(){
    this._userService.logout((res) => {
      this._router.navigateByUrl('/');
    })
  }
}
