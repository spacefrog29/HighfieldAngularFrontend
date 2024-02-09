// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-users-list',
//   templateUrl: './users-list.component.html',
//   styleUrl: './users-list.component.css'
// })
// export class UsersListComponent {

// }
import { Component} from '@angular/core';
import { response } from 'express';
import { UserEntity } from '../Models/user.model';
import { colourEntity } from '../Models/colour.model';
import { UserentityservicesService } from '../Services/userentityservices.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  constructor(private userentityservice: UserentityservicesService) { }

  userData: UserEntity[] = [];
    
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

