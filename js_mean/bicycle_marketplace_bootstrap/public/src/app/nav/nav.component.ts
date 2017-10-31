import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  currentUser: User = new User();

  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._userService.session((res) => {
      if (res.status === false) {
        this._router.navigateByUrl('/');
      } else {
        this.currentUser = res;
      }
    })
  }

  logout(){
    this._userService.logout((res) => {
      this._router.navigateByUrl('/');
    })
  }

}
