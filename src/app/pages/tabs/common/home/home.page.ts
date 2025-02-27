import { IonButtons } from "@ionic/angular/standalone";
import { Component, inject } from "@angular/core";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/angular/standalone";
import { AppearanceButtonComponent } from "src/app/components/appearance-button/appearance-button.component";
import { BalanceVisibilityComponent } from "../../../../components/balance-visibility/balance-visibility.component";
import { AuthService } from "src/app/services/auth/auth.service";
import { BalanceCardComponent } from "../../../../components/balance-card/balance-card.component";
import { NotificationButtonComponent } from "../../../../components/notification-button/notification-button.component";

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
    BalanceVisibilityComponent,
    BalanceCardComponent,
    NotificationButtonComponent,
  ],
})
export class HomePage {
  auth = inject(AuthService);

  constructor() {}
}
