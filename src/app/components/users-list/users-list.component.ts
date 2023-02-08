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
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles = {};

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
          image: 'http://picsum.photos/300',
          isActive: false
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
          image: 'http://picsum.photos/300',
          isActive: true
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
          image: 'http://picsum.photos/300',
          isActive: true
        }
      ];
    this.loaded = true



    // this.showExtended = false;

    this.addUser({
      firstName: 'Sally',
      lastName: 'Fields',
      // age: 60
      // address: {
      //   street: '1200 Elm St',
      //   city: 'Los Angeles',
      //   state: 'CA'
      // }
    })

    this.setCurrentClass();
    this.setCurrentStyles();

  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClass() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '130px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }



}
