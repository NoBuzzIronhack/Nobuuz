import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {RouterModule} from '@angular/router';
import { myRoutes } from './routes';
import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './search/search.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ProfileComponent } from './profile/profile.component';
import {SearchService} from './services/search.service';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import {VideoSearchService} from './services/video-search.service';
import { SearchUrlComponent } from './search-url/search-url.component'
import { searchUrlService } from './services/searchUrl.service';
import { ProfileService } from './services/profile.service';
import { MenuComponent } from './menu/menu.component';
import { UserSearchComponent } from './user-search/user-search.component';
import {UserSearchService} from './services/user-search.service';
import {NewsfeedService} from './services/newsfeed.service';
import { MaterializeModule } from 'angular2-materialize';
import {PublicProfileComponent} from './public-profile/public-profile.component'
import { FollowingComponent } from './following/following.component';
import {PublicProfileService} from './services/public-profile.service';
import 'materialize-css';
import { PortadaComponent } from './portada/portada.component';



import 'materialize-css';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ProfileBooksComponent } from './profile-books/profile-books.component';
import { ProfileVideosComponent } from './profile-videos/profile-videos.component';
import { ProfileArticlesComponent } from './profile-articles/profile-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    CategoryComponent,
    SearchComponent,
    BookDetailComponent,
    ProfileComponent,
    VideoDetailComponent,
    SearchUrlComponent,
    MenuComponent,
    UserSearchComponent,
    PublicProfileComponent,
    FollowingComponent,
    PortadaComponent,
    NewsfeedComponent,
    ProfileBooksComponent,
    ProfileVideosComponent,
    ProfileArticlesComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myRoutes),

  ],
  providers: [AuthService, SearchService, searchUrlService, ProfileService,
    VideoSearchService, UserSearchService, PublicProfileService, NewsfeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
