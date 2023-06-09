import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  /**
   * This function makes a http get request to 
   * retreive a random post within the database.
   * 
   * @returns http Observable
   */
  getRandomActivity() {
    const token = localStorage.getItem('token');
    
    return this.http
    .get(`http://localhost:8080/api/activities`, {headers: {['Authorization']: `Bearer ${token}`}})
  }

  /**
   * This function makes a http post request to create 
   * a new activity post.
   * 
   * @returns http Observable
   */
  createActivity(text: string) {
    const token = localStorage.getItem('token');

    return this.http
    .post(`http://localhost:8080/api/activities`, {content: text}, {headers: {['Authorization']: `Bearer ${token}`}});
  }

  /**
   * This function makes a http post request to add 
   * an existing activity to current user's like list.
   * 
   * @returns http Observable
   */
  addLike(postId: number) {
    const token = localStorage.getItem('token');

    return this.http
    .post(`http://localhost:8080/api/activities/${postId}`, {}, {headers: {['Authorization']: `Bearer ${token}`}});
  }

  /**
   * This function makes a http delete request to remove 
   * an existing activity from current user's like list.
   * 
   * @returns http Observable
   */
  removeLike(postId: number) {
    const token = localStorage.getItem('token');

    return this.http
    .delete(`http://localhost:8080/api/activities/${postId}`, {headers: {['Authorization']: `Bearer ${token}`}});
  }
}
