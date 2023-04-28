import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUri = "http://localhost:5000/"
  constructor(private http: HttpClient) { }

  endpointOne(inpTxt:any){
    let headers: any = {};
    headers["prompt"] = inpTxt;
    headers["size"] = "medium";
    return(this.http.post(this.baseUri+"openai/generateimage",headers));
  }

  uploadSearch(inpTxt:any){
    
    return(this.http.post(this.baseUri+"openai/imagevariation",{url:inpTxt}));
  }
}
