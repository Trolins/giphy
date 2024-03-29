import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  APIkey = 'lg1gJbOCiKeAw8I72FMSTveyX9O4UzO8';
  URL = 'http://api.giphy.com/v1/gifs/';

  constructor(private http: HttpClient) { }

  GetTrendingGif(limit:number): Observable<any> {
    return this.http.get(this.URL+"trending?api_key="+this.APIkey+"&limit="+limit);
  }
  GetSearchGif(limit:number, text:string): Observable<any> {
    return this.http.get(this.URL+"search?api_key="+this.APIkey+"&limit="+limit+"&q="+text);
  }
}
