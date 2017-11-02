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

    create(newPost: Post, callback) {
      this._http.post('/posts', newPost).subscribe(
        res => callback(res.json()),
        err => console.log(err)
      );
    }

    show(id: string, callback) {
      this._http.get(`/posts/${id}`).subscribe(
        res => callback(res.json()),
        err => console.log(err)
      );
    }

    update(post, callback){
      // return this._http.put(`/posts/${post._id}`, post).map(data => data.json()).toPromise(); //  this line works as well
      this._http.put(`/posts/${post._id}`, post).subscribe(
        res => callback(res.json()),
        err => console.log(err)
      );
    }

    destroy(id: string, callback) {
      this._http.delete(`posts/${id}`).subscribe(
        res => callback(res.json()),
        err => console.log(err)
      );
    }
}
