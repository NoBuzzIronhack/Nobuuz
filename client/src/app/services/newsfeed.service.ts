import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/newsfeed";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class NewsfeedService {
  options:Object = {
    withCredentials:true
  }
  constructor(private http: Http) { }

    getNewsfeed():Observable<any>{
      return this.http.get(`${BASEURL}`, this.options)
                      .map(res => res.json());
    }
}
