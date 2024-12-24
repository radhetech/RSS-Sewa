import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class valueSelect{
 

 private currentVasti = new BehaviorSubject<any>({});
 private currentShakha = new BehaviorSubject<any>({});
public getUserData=()=>{
  return JSON.parse(window.localStorage.getItem('loggedInUser')!);
}
 
  
  changeShakha(shakha: any) {
    this.currentShakha.next(shakha);
  }
  changeVasti(vasti: any) {
    this.currentVasti.next(vasti);
  }
  getCurrentVasti(){
     return  this.currentVasti.asObservable();
  }
  getCurrentShakha(){
    return this.currentShakha.asObservable();
  }

}