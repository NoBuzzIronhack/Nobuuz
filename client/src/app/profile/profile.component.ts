import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service'
import { DomSanitizer } from '@angular/platform-browser';
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUser;

  constructor(public dashboard: ProfileService, public sanitizer: DomSanitizer, public AuthService: AuthService) { }
  myPublications;
  ngOnInit() {
    this.AuthService.isLoggedIn()
    .subscribe( user => {
      this.loggedUser = user;
    });
    this.dashboard.getProfileList()
    .subscribe(publicationList => {
    this.myPublications = publicationList.map(e =>{
        if(e.publication.link.split('.')[1]=='youtube'){
          e.publication.link = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+e.publication.link.substr(e.publication.link.lastIndexOf('v=')+2, e.publication.link.length));
          e.publication.new = 'youtube';
          return e;
        }else{
          return e;
        }
      })
    });
  }

}
