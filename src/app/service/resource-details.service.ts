import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResourceDetailsService {
  _url = '../../assets/json/resources.json';
  constructor(private http: HttpClient) { }

  getResouceDetails() :Observable<[]>{
    return this.http.get<[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}


