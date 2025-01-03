import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);
  private API_URL = 'http://127.0.0.1:8080/posts';

  constructor() {}

  getPostsSvc(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API_URL}`);
  }

  deletePostSvc(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.API_URL}/${id}`);
  }
}
