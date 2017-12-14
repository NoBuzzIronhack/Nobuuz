import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment'

const DOMAIN = environment.baseurl;
const PATH = "/books";
const BASEURL = `${DOMAIN}${PATH}`;


@Injectable()
export class SearchService {
  options:Object = {
    withCredentials:true
  }
  constructor(private http: Http) { }

    searchBookList(querybook):Observable<any>{
      return this.http.get(`${BASEURL}?q=${querybook}`, this.options)
                      .map(res => res.json());
    }
    getBookDetail(url):Observable<any>{
    return this.http.get(`${BASEURL}/detail/?url=${url}`, this.options)
      .map(res =>res.json());
    }

    saveBookPublication(book, comments) {
      return this.http.post(`${BASEURL}/detail/`, [book, comments], this.options)
      .map(res =>res.json());
    }


    }
