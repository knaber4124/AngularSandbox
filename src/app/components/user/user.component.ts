import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    // styles:[`
    // h2{color:blue}`]

})

export class UserComponent implements OnInit {
    //Component Properties
    user!: User;
    //Methods
    constructor() {

    }

    ngOnInit() {
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'John.Doe@gmail.com'
        }
    }
}



