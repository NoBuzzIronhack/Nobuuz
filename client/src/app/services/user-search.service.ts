import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment'

const DOMAIN = environment.baseurl;
const PATH = "/user-search";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class UserSearchService {
  options:Object = {
    withCredentials:true
  }
  constructor(private http: Http) { }

    searchOneUser(username):Observable<any>{
      return this.http.get(`${BASEURL}?q=${username}`, this.options)
                      .map(res => res.json());
    }
}
