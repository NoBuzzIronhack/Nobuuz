import { Component, OnInit } from '@angular/core';
import {UserSearchService} from '../services/user-search.service'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  queryUsername;
  oneUsername;
  constructor(public route: ActivatedRoute, private router: Router, public UserSearch: UserSearchService ) { }

  ngOnInit() {
  }

findOneUser(){
this.UserSearch.searchOneUser(this.queryUsername).subscribe(object => {
this.oneUsername = object.username
 console.log(object._id)
})
}


}
