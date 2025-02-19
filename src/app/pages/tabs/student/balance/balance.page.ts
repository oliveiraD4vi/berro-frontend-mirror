import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
} from "@ionic/angular/standalone";
import { AppearanceButtonComponent } from "src/app/components/appearance-button/appearance-button.component";
import { BalanceCardComponent } from "../../../../components/balance-card/balance-card.component";
import { BalanceVisibilityComponent } from "../../../../components/balance-visibility/balance-visibility.component";

@Component({
  selector: "app-balance",
  templateUrl: "./balance.page.html",
  styleUrls: ["./balance.page.scss"],
  standalone: true,
  imports: [
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    AppearanceButtonComponent,
    BalanceCardComponent,
    BalanceVisibilityComponent
],
})
export class BalancePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
