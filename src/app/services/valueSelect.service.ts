import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class valueSelect{
   private shakhaVrutSelected = new BehaviorSubject<boolean>(false);
  //  shakha vasti and breadcrum to show and hide
   private showVasti = new BehaviorSubject<boolean>(false);
   private showShakha = new BehaviorSubject<boolean>(false);
   private breadCrumb = new BehaviorSubject<boolean>(true);
   private navItemSelected = new BehaviorSubject<any>({});
  //  ends here
   shakhaVrutSelected$ = this.shakhaVrutSelected.asObservable();
   showVasti$ = this.showVasti.asObservable();
   showShakha$ = this.showShakha.asObservable();
    

 public currentVasti = new BehaviorSubject<any>({});
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
  manageBreadCrumb(val:boolean){
    this.breadCrumb.next(val)
  }
  manageShakhaVrutFlag(val:boolean){
    this.shakhaVrutSelected.next(val)
  }
  manageShowVasti(val:boolean){
    this.showVasti.next(val)
  }
  manageShowShakha(val:boolean){
    this.showShakha.next(val)
  }
  showBreadCrumb(){
    return this.breadCrumb.asObservable();
  }

}