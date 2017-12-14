import { RouterModule, Routes } from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {SearchComponent} from './search/search.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {ProfileComponent} from './profile/profile.component';
import {VideoDetailComponent} from './video-detail/video-detail.component'
import { SearchUrlComponent } from './search-url/search-url.component'
import {UserSearchComponent} from './user-search/user-search.component';
import {PublicProfileComponent} from './public-profile/public-profile.component';
import {FollowingComponent} from './following/following.component';
import {PortadaComponent} from './portada/portada.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {NewsfeedComponent} from './newsfeed/newsfeed.component';
import {ProfileVideosComponent} from './profile-videos/profile-videos.component';
import {ProfileBooksComponent} from './profile-books/profile-books.component';
import {ProfileArticlesComponent} from './profile-articles/profile-articles.component';


const myRoutes: Routes =[
{path: 'login', component: LoginFormComponent},
{path: 'categories', component: CategoryComponent},
{path: 'book-search', component: SearchComponent},
{path: 'book-detail/:url', component: BookDetailComponent},
{path:'video-search', component:SearchComponent},
{path:'video-detail/:url', component:VideoDetailComponent},
{path: 'profile', component: ProfileComponent},
{path: 'url-search', component: SearchUrlComponent },
{path: 'user-search', component: UserSearchComponent },
{path: 'public-profile/:id', component: PublicProfileComponent},
{path: 'following', component: FollowingComponent},
{path: 'newsfeed', component: NewsfeedComponent},
{path: 'profile-videos', component: ProfileVideosComponent},
{path: 'profile-books', component: ProfileBooksComponent},
{path: 'profile-articles', component: ProfileArticlesComponent},
{path: '**', component: NewsfeedComponent }
];

export{ myRoutes };
