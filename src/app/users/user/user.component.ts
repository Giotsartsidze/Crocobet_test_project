import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User | undefined;

  constructor(
    private apiService: ApiCallService,
    private activeRoute: ActivatedRoute
  ) {}

  // get user by id 
  getUser(id: number) {
    this.apiService.getUser(id).subscribe((_user: any) => (this.user = _user));
  }

  ngOnInit(): void {
    // get id from url
    this.activeRoute.params.subscribe((param:Params) => {
      var id = param['id'];
      this.getUser(id);
      this.activeRoute.params.subscribe((params: Params) => {
        this.apiService
          .getUser(params['id'])
          .subscribe((_user: any) => (this.user = _user));
      });
    })
  }
}