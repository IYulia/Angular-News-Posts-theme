import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { PostsInterface } from 'src/interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public data: PostsInterface = { posts:[], total: 0, skip: 0, limit: 0 }
  constructor(private http: HttpClient) {
    this.getPosts(10,0).subscribe((data) => 
      {this.data = data})

  }
  getPosts(limit:number, skip:number): Observable<PostsInterface> {
    const url = `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
    return this.http.get<PostsInterface>(url);
  }
}
