import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-logout',
  templateUrl: './manager-logout.component.html',
  styleUrls: ['./manager-logout.component.scss']
})
export class ManagerLogoutComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['manager-login']);
  }

}