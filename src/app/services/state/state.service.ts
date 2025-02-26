import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StateService {
  // STARTS SHOW BALANCE
  private showBalanceSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  showBalance$ = this.showBalanceSubject.asObservable();

  setShowBalance(show: boolean) {
    this.showBalanceSubject.next(show);
  }
  // END SHOW BALANCE
}
