import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);
  private API_URL = 'http://127.0.0.1:8080/categories';

  constructor() {}

  getCategoriesSvc(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.API_URL}`);
  }

  findCategorySvc(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.API_URL}/${id}`);
  }

  createCategorySvc(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.API_URL}`, category);
  }

  updateCategorySvc(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.API_URL}/${id}`, category);
  }

  deleteCategorySvc(id: number): Observable<Category> {
    return this.http.delete<Category>(`${this.API_URL}/${id}`);
  }
}
