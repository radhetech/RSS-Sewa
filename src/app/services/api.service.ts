import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private _http:HttpClient) { }
  
  getData(url:string,options?:any){
    return this._http.get(url,options);
  }
  postData(url:string,data:any,headers?:any): Observable<any>{
    return this._http.post(url,data,headers);
  }
  udpateRecord(url:string,data:any): Observable<any>{
    return this._http.put(url,data);
  }
  login(credentials: any): Observable<void> {
    return this._http
      .post<any>('api/authenticate', credentials)
      .pipe(map(response => {
        console.log("response",response);
      }));
  }
  
}
