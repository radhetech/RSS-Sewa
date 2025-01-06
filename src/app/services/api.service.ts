import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private _http:HttpClient) { }
  //private API_URL= "";
  private API_URL= "https://sevavibhagrss.com/api/";

  getData(url:string,options?:any){
    return this._http.get(this.API_URL+url,options);
  }
  postData(url:string,data:any,headers?:any): Observable<any>{
    return this._http.post(this.API_URL+url,data,headers);
  }
  udpateRecord(url:string,data:any): Observable<any>{
    return this._http.put(this.API_URL+url,data);
  }
  login(credentials: any): Observable<void> {
    return this._http
      .post<any>(this.API_URL+'api/authenticate', credentials)
      .pipe(map(response => {
        console.log("response",response);
      }));
  }
  getUserData(){
    return JSON.parse(localStorage.getItem('loggedInUser'))
  }
  
  
}
