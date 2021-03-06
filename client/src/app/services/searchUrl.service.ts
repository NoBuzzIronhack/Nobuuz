import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment'

const DOMAIN = environment.baseurl;
const PATH = "/publi";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class searchUrlService {
  options:Object = {
    withCredentials:true
  }
  constructor(private http: Http) { }

    pasteUrl(url):Observable<any>{
      return this.http.get(`${BASEURL}?url=${url}`, this.options)
                      .map(res => res.json());
    }

    saveUrlPublication(publi,comments) {
      return this.http.post(`${BASEURL}`, [publi,comments], this.options)
      .map(res =>res.json());
    }
}
