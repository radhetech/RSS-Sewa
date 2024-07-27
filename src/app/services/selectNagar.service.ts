import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class SelectNagarService{


 private selectedNagarSource = new BehaviorSubject<string>('');
  currentNagar = this.selectedNagarSource.asObservable();

  changeNagar(nagar: string) {
    this.selectedNagarSource.next(nagar);
  }
}