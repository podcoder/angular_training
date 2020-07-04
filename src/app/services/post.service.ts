import { BASE_URL } from './../../base_url';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${BASE_URL}/posts`)
  }


  getUserPosts(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${BASE_URL}/posts?userId=${userId}`);
  }


  // Add New Post to ther Server
  addPost(post: any): Observable<any> {
    return this.http.post(`${BASE_URL}/posts`, post, httpOptions);
  }

  // delete A post 
  deletePost(post: Post): Observable<any> {
    return this.http.delete(`${BASE_URL}/posts/${post.id}`);
  }

  //Update a Post
  updatePost(post: Post): Observable<any> {
    return this.http.put(`${BASE_URL}/posts/${post.id}`, post, httpOptions);
  }
}
