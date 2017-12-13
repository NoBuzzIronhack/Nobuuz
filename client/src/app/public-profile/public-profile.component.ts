import { Component, OnInit } from '@angular/core';
import { PublicProfileService } from '../services/public-profile.service'
import { DomSanitizer } from '@angular/platform-browser';
import {AuthService} from '../services/auth.service'
import {ActivatedRoute, Router} from '@angular/router';
declare var $:any;


@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  constructor(public publicProfileService: PublicProfileService, public sanitizer: DomSanitizer, public AuthService: AuthService, public route: ActivatedRoute, private router: Router) { }
  publicPublications;
  publicUser;
  loggedUser;
  ngOnInit() {
    this.getUserProfile(this.publicProfileService.publicUsername);
    this.publicUser = this.publicProfileService.publicUsername;
    this.loggedUser = this.AuthService.user;
    console.log(this.publicUser, this.loggedUser)
  }

      getUserProfile(oneUsername){
          this.publicProfileService.getPublicProfileList(oneUsername._id)
          .subscribe(response => {
            this.publicPublications = response.map(e => {
              if (e.publication.link.split('.')[1]=='youtube'){
              e.publication.link = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+e.publication.link.substr(e.publication.link.lastIndexOf('v=')+2, e.publication.link.length));
              e.publication.new = 'youtube';
              return e
            } else {
              return e;
          }
        })
      });
  }


  followUser(oneUsername){
      this.publicProfileService.follow(this.publicUser._id, this.loggedUser)
      .subscribe(response => {
        // this.router.navigate(['/following'])
  });


}

}
