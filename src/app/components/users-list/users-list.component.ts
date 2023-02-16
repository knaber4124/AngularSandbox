import { Component } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  };
  users!: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  event: any;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
    this.users =
      [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '1 Main St',
            city: 'Boston',
            state: 'MA'
          },
          isActive: false,
          registered: new Date('1/1/2020 08:25:59'),
          hide: true
        },
        {
          firstName: 'Kevin',
          lastName: 'Smith',
          age: 25,
          address: {
            street: '25 Boylston St',
            city: 'Boston',
            state: 'MA'
          },
          isActive: true,
          registered: new Date('5/10/2020 10:45:45'),
          hide: true

        },
        {
          firstName: 'Cathy',
          lastName: 'Richards',
          age: 28,
          address: {
            street: '100 Commonwealth Ave',
            city: 'Boston',
            state: 'MA'
          },
          isActive: true,
          registered: new Date('11/25/2021 13:05:00'),
          hide: true
        }
      ];
    this.loaded = true;
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    }

  }
  onSubmit(e) {
    console.log('submitted')
    e.preventDefault();
  }

  // toggleHide(user: User) {
  //   user.hide = !user.hide
  // }
}
