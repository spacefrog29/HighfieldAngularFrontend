import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import e from 'express';
import { colourEntity } from '../Models/colour.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColourEntityService{

    constructor(private http: HttpClient){}
  
    getColourData(): Observable<colourEntity>
    {
       return this.http.get<colourEntity>(environment.colourDataAPIBaseURL)
    }
  }