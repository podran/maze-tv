import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchShows(data: string): Observable<object> {
    return this.http.get(`http://api.tvmaze.com/search/shows?q=${data}`);
  }
}
