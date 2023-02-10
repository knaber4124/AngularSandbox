import { Component } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  users!: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;
  event:any;

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
          registered: new Date('1/1/2020 08:25:59')
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
          registered: new Date('5/10/2020 10:45:45')

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
          registered: new Date('11/25/2021 13:05:00')

        }
      ];
    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  fireEvent(e) {
    // console.log('button clicked')
    console.log(e.type);
  }
}
