import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment'

const DOMAIN = environment.baseurl;
const PATH = "/video/youtube";
const BASEURL = `${DOMAIN}${PATH}`;


@Injectable()
export class VideoSearchService {
  options:Object = {
    withCredentials:true
  }
  constructor(private http: Http) { }

  searchVideoList(VideoQuery):Observable<any>{
    return this.http.get(`${BASEURL}?q=${VideoQuery}`, this.options)
                    .map(res => res.json());
      }

  getVideoDetail(url):Observable<any>{
  return this.http.get(`${BASEURL}/detail/?url=${url}`, this.options)
    .map(res =>res.json());
      }
//tengo que pasarle el video link para para que te salve en la base de declarations
  saveVideoPublication(video, comments) {
    return this.http.post(`${BASEURL}/detail/`, [video, comments], this.options)
    .map(res =>res.json());
      }

}
