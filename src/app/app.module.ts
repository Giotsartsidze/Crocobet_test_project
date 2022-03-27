import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { UserPostsComponent } from './users/user/user-posts/user-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    UsersComponent,
    UserPostsComponent
    
  ],
  imports: [ AppRoutingModule, HttpClientModule,BrowserModule,  FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
