import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    const id = +this.activeRoute.snapshot.params['id'];

    //after getting id it will listen to it and go to the posts published buy this ID
    this.apiService.getPosts(id).subscribe((_posts: Post[] | undefined) => {
      this.posts = _posts;
    });
  }
}
