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
}
