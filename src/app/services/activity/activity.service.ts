import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getRandomActivity() {
    const token = localStorage.getItem('token');
    
    return this.http
    .get(`http://localhost:8080/api/activities`, {headers: {['Authorization']: `Bearer ${token}`}})
  }

  createActivity(text: string) {
    const token = localStorage.getItem('token');

    return this.http
    .post(`http://localhost:8080/api/activities`, {content: text}, {headers: {['Authorization']: `Bearer ${token}`}});
  }

  addLike(postId: number) {
    const token = localStorage.getItem('token');

    return this.http
    .post(`http://localhost:8080/api/activities/${postId}`, {}, {headers: {['Authorization']: `Bearer ${token}`}});
  }
}
