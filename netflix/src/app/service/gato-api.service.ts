import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatoApiService {

  constructor(private http:HttpClient) { }

  baseUrl = 'https://api.thecatapi.com';
  apiKey = 'live_ZYQB3fiYgUkndw5ca2kHBA2eCNMcMxCTkgi6OM3wiW6xhnqblyjEo3FN5jw4vPqE';

  bannerApiData():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/api_key=${this.apiKey}`);
  }

  
}
