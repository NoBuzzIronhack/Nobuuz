import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
loggedUser;
  constructor(public AuthService: AuthService) { }

  ngOnInit() {
  this.AuthService.isLoggedIn()
  .subscribe( user => {
    this.loggedUser = user;
  })
  }

}
