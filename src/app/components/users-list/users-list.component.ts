import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    email: ''
  };
  users!: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  event: any;
  showUserForm: boolean = false;
  form: any;

  constructor() { }

  ngOnInit() {
    this.users =
      [
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
    this.loaded = true;
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email:''
  //   }

  // 
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form not Valid')
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);
      // this.form.reset();
    }
  }

  // toggleHide(user: User) {
  //   user.hide = !user.hide
  // }
}
