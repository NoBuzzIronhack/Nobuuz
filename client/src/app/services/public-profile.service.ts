import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/public-profile";
const BASEURL = `${DOMAIN}${PATH}`;
@Injectable()
export class PublicProfileService {
  options:Object = {
    withCredentials:true
  }
  publicUsername: Object;

  constructor(private http: Http) { }

  getPublicProfileList(id):Observable<any>{
    return this.http.get(`${BASEURL}/${id}`, this.options)
                    .map(res => res.json())
  }

  follow(id, currentUserId):Observable<any>{
    console.log(id,currentUserId)
    return this.http.post(`${BASEURL}/${id}`,{ loggedUserId: currentUserId }, this.options)
                    .map(res => res.json())

  }

}