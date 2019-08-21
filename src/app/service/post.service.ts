import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts;
  url: string = 'https://jsonplaceholder.typicode.com/posts'
  getPosts() {
    this.http.get(this.url).subscribe(resbonse => {
      this.posts = resbonse;
    })
  }

  constructor(private http: HttpClient) { }
  creatPost(input: HTMLInputElement) {
    let post = { title: input.value, id: '1', body: 'New Body' }
    this.http.post(this.url, JSON.stringify(post)).subscribe(resbonse => {
      this.posts.splice(0, 0, post)
    })

  }

  updatePost(post, inputTitle) {

    let updatepost = { title: inputTitle, id: post.id };
    console.log(updatepost);
    this.http.put(this.url + '/' + post.id, JSON.stringify(updatepost)).subscribe(resbonse => {
      let index = this.posts.indexOf(post);
      this.posts[index] = updatepost;
      //Or

      //his.posts[this.posts.indexOf(post)] = resbonse withOut  ==> let index = this.posts.indexOf(post);
    })


  }
}
