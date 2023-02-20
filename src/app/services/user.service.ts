import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        isActive: false,
        registered: new Date('1/1/2020 08:25:59'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Smith',
        email: 'kevin.smith@gmail.com',
        isActive: true,
        registered: new Date('5/10/2020 10:45:45'),
        hide: true

      },
      {
        firstName: 'Cathy',
        lastName: 'Richards',
        email: 'cathy.richards@gmail.com',
        isActive: true,
        registered: new Date('11/25/2021 13:05:00'),
        hide: true
      }
    ];

  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next(4);
      }, 4000);
    })
    return this.data;
  }

}
