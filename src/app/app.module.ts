import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './router/app-routing.module'

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PostsComponent } from './components/posts/posts.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserComponent } from './components/user/user.component';
import { UserPostComponent } from './components/user-post/user-post.component';
import { AddPostComponent } from './components/add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    UserListComponent,
    PostsComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    UserPostComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
