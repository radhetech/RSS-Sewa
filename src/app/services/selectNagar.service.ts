import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class SelectNagarService{


 private selectedNagarSource = new BehaviorSubject<any>('');
  currentNagar = this.selectedNagarSource.asObservable();

  changeNagar(nagar: any) {
    this.selectedNagarSource.next(nagar);
  }
}