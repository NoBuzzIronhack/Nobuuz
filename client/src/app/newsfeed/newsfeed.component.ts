import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {NewsfeedService} from '../services/newsfeed.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  constructor(public AuthService: AuthService, public newsfeed: NewsfeedService, public sanitizer: DomSanitizer ) { }
  loggedUser;
  publicUsers;
  publicPublications;

  ngOnInit() {
  this.AuthService.isLoggedIn()
  .subscribe( user => {
    this.loggedUser = user;
    console.log(this.loggedUser)
  })

  this.newsfeed.getNewsfeed()
  .subscribe(publications => {
    this.publicPublications = publications.reverse().map(e => {
      if (e.publication.link.split('.')[1]=='youtube'){
      e.publication.link = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+e.publication.link.substr(e.publication.link.lastIndexOf('v=')+2, e.publication.link.length));
      e.publication.new = 'youtube';
      return e
    } else {
      return e;
  }
})
})
}


}
