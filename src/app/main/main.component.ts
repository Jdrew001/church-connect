import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  get userInfo() { return this.userService.USER_INFO; }

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.fetchUserInfo();
  }

}
