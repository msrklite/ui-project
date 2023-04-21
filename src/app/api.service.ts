import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUri = "http://localhost:5000"
  constructor(private http: HttpClient) { }

  endpointOne(inpTxt:any){
    return(this.http.post(this.baseUri+"endpointOne",{data:inpTxt}));
  }
}
