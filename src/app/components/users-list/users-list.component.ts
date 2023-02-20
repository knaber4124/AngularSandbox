import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';



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
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
    this._userService.getData().subscribe(data => {
      console.log(data)
    })
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
      this._userService.addUser(value);
      this.form.reset();
    }
  }

  // toggleHide(user: User) {
  //   user.hide = !user.hide
  // }
}
