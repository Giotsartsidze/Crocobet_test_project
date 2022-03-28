import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/models/posts.model';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  posts: Post[] | undefined;

  constructor(
    private apiService: ApiCallService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param:Params) => {
      this.apiService.getPosts(Number(param['id'])).subscribe((_posts: Post[] | undefined) => {
        this.posts = _posts;
      });
    })
  }
}
