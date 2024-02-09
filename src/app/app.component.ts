import { Component, OnInit } from '@angular/core';
import { UserentityservicesService } from './Services/userentityservices.service';
import { response } from 'express';
import { UserEntity } from './Models/user.model';
import { colourEntity } from './Models/colour.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: any;
  constructor(private userentityservice: UserentityservicesService) { }

  userData: UserEntity[] = [];
  colourData: colourEntity[] = [];
  
  ngOnInit(): void {
    this.userentityservice.getUserData()
      .subscribe({
        next: (response) => {
          if (Array.isArray(response)) {
            this.userData = response as UserEntity[];
          }
          else {
            this.userData = [response as UserEntity];
          }
        },
        error: (error) => {
          console.error('Error fetching user data:', error);
        }
      });
  }
}

