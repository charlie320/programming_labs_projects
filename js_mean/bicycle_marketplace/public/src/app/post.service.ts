import { Injectable } from '@angular/core';
import { Post } from './post';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class PostService {

    constructor(private _http: Http) { }

    index(callback) {
      this._http.get('/posts').subscribe(
        res => callback(res.json()),
        err => console.log(err)
      );
    }

    getPostsByUser(callback) {

    }

    create(newPost: Post, callback) {
      this._http.post('/posts', newPost).subscribe(
        res => callback(res.json()),
        err => console.log(err)
      );
    }

    show(id: string, callback) {
      this._http.get(`posts/${id}`).subscribe(
        res => callback(res.json()),
        err => console.log(err)
      );
    }

    // update(id: any, updatedPost: Post, callback) {
    //   console.log("Inside the update method in post.service");
    //   this._http.put(`posts/${id}`, updatedPost).subscribe(
    //     res => callback(res.json()),
    //     err => console.log(err)
    //   );
    // }

    update(bike){
      return this._http.patch(`/posts/${bike._id}`, bike).map(data => data.json()).toPromise();
    }

    destroy(id: string, callback) {
      this._http.delete(`posts/${id}`).subscribe(
        res => callback(res.json()),
        err => console.log(err)
      );
    }
}
