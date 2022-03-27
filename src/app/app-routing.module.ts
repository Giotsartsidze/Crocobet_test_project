import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPostsComponent } from './users/user/user-posts/user-posts.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  { path: 'users/:id', component: UserComponent },
  { path: 'users/:id/posts', component: UserPostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

