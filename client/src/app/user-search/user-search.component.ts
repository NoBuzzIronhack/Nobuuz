import { Component, OnInit } from '@angular/core';
import {UserSearchService} from '../services/user-search.service'
import {ActivatedRoute, Router} from '@angular/router';
import{PublicProfileService} from '../services/public-profile.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  queryUsername;
  oneUsername;
  constructor(public route: ActivatedRoute, private router: Router, public UserSearch: UserSearchService, public publicProfileService: PublicProfileService ) { }

  ngOnInit() {
  }

findOneUser(){
this.UserSearch.searchOneUser(this.queryUsername).subscribe(object => {
this.oneUsername = object;
})
}
getUserProfile(oneUsername){
  this.publicProfileService.getPublicProfileList(oneUsername._id)
    .subscribe(response => {
      this.publicProfileService.publicPublications = response;
    });
    this.router.navigate(['/public-profile', oneUsername._id]);
}
}
