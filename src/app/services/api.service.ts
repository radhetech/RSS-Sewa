import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private _http:HttpClient) { }
  getData(url:string){
    return this._http.get(url);
  }
  postData(url:string,data:any): Observable<any>{
    return this._http.post(url,data);
  }
  udpateRecord(url:string,data:any): Observable<any>{
    return this._http.put(url,data);
  }
}
