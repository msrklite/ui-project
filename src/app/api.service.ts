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
    return(this.http.post(this.baseUri+"openai/generateimage1",headers));
  }
  
  endpoint2(inpTxt:any){
    let headers: any = {};
    headers["prompt"] = inpTxt;
    headers["size"] = "medium";
    return(this.http.post(this.baseUri+"openai/generateimage2",headers));
  }
  
  endpoint3(inpTxt:any){
    let headers: any = {};
    headers["prompt"] = inpTxt;
    headers["size"] = "medium";
    return(this.http.post(this.baseUri+"openai/generateimage3",headers));
  }
  
  endpoint4(inpTxt:any){
    let headers: any = {};
    headers["prompt"] = inpTxt;
    headers["size"] = "medium";
    return(this.http.post(this.baseUri+"openai/generateimage4",headers));
  }

  uploadSearch(inpTxt:any){
    return(this.http.post(this.baseUri+"openai/imagevariation1",{url:inpTxt}));
  }
  uploadSearch2(inpTxt:any){
    return(this.http.post(this.baseUri+"openai/imagevariation2",{url:inpTxt}));
  }
  uploadSearch3(inpTxt:any){
    return(this.http.post(this.baseUri+"openai/imagevariation3",{url:inpTxt}));
  }
  uploadSearch4(inpTxt:any){
    return(this.http.post(this.baseUri+"openai/imagevariation4",{url:inpTxt}));
  }
}
