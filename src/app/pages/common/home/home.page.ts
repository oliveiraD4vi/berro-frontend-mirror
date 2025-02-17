import { IonButtons } from "@ionic/angular/standalone";
import { Component } from "@angular/core";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/angular/standalone";
import { AppearanceButtonComponent } from "src/app/components/appearance-button/appearance-button.component";
import { BalanceCardComponent } from "src/app/components/balance-card/balance-card.component";
import { BalanceVisibilityComponent } from "../../../components/balance-visibility/balance-visibility.component";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    AppearanceButtonComponent,
    IonButtons,
    BalanceCardComponent,
    BalanceVisibilityComponent
],
})
export class HomePage {
  constructor() {}
}
