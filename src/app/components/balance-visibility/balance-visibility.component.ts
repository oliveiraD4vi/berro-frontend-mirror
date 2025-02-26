import { StateService } from "./../../services/state/state.service";
import { IonButton } from "@ionic/angular/standalone";
import { IonIcon } from "@ionic/angular/standalone";
import { Component, inject } from "@angular/core";

@Component({
  selector: "app-balance-visibility",
  templateUrl: "./balance-visibility.component.html",
  styleUrls: ["./balance-visibility.component.scss"],
  imports: [IonIcon, IonButton],
})
export class BalanceVisibilityComponent {
  state = inject(StateService);

  isVisible: boolean = false;

  constructor() {
    this.state.showBalance$.subscribe((show: boolean) => {
      this.isVisible = show;
    });
  }

  toggleVisibility() {
    this.state.setShowBalance(!this.isVisible);
  }
}
