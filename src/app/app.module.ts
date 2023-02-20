import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersListComponent,
    NavbarComponent,
    PostsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
