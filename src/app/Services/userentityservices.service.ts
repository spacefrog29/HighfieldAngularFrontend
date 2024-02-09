import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import e from 'express';
import { UserEntity } from '../Models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserentityservicesService {

  constructor(private http: HttpClient) { }

  getUserData(): Observable<UserEntity>
  {
    return this.http.get<UserEntity>(environment.userDataAPIBaseURL)
  }
}


