import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class valueSelect{
 
private showComp = new BehaviorSubject<boolean>(false);
 private currentVasti = new BehaviorSubject<string>('');
 private currentShakha = new BehaviorSubject<string>('');
public getUserData=()=>{
  return JSON.parse(window.localStorage.getItem('loggedInUser')!);
}
 
  showComp$ = this.showComp.asObservable();
  changeShakha(shakha: string) {
    this.currentShakha.next(shakha);
  }
  changeVasti(vasti: string) {
    this.currentVasti.next(vasti);
  }
  getCurrentVasti(){
     return  this.currentVasti.asObservable();
  }
  getCurrentShakha(){
    return this.currentShakha.asObservable();
  }
}