import { Component, OnInit } from '@angular/core';
import { PublicProfileService } from '../services/public-profile.service'
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  constructor(public publicProfileS: PublicProfileService, public sanitizer: DomSanitizer) { }
  ppPublications;
  ngOnInit() {
    // this.publicProfileS.getPublicProfileList()
    // .subscribe(ppList => {
    //   this.ppPublications = ppList.map(e=>{
    //     if(e.publication.link.split('.')[1]=='youtube'){
    //       e.publication.link = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+e.publication.link.substr(e.publication.link.lastIndexOf('v=')+2, e.publication.link.length));
    //       e.publication.new = 'youtube';
    //       return e;
    //     }else {
    //       return e;
    //
    //     }
    //   })
    // });
  }

}
