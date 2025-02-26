import { Component } from "@angular/core";
import { IonApp, IonRouterOutlet } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import {
  attachOutline,
  cartOutline,
  documentAttachOutline,
  documentTextOutline,
  eyeOffOutline,
  eyeOutline,
  glasses,
  homeOutline,
  logoBitcoin,
  newspaperOutline,
  peopleOutline,
  personCircle,
  personCircleOutline,
  pricetagOutline,
  roseOutline,
  settingsOutline,
  sunny,
  sunnyOutline,
  walletOutline,
  mailOutline,
  keyOutline,
  notificationsOutline,
  addCircleOutline,
  addOutline,
  mailUnreadOutline,
  chevronForwardOutline,
} from "ionicons/icons";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({
      personCircle,
      personCircleOutline,
      sunny,
      sunnyOutline,
      roseOutline,
      homeOutline,
      cartOutline,
      logoBitcoin,
      glasses,
      newspaperOutline,
      documentTextOutline,
      peopleOutline,
      pricetagOutline,
      walletOutline,
      settingsOutline,
      attachOutline,
      documentAttachOutline,
      eyeOutline,
      eyeOffOutline,
      mailOutline,
      mailUnreadOutline,
      keyOutline,
      notificationsOutline,
      addCircleOutline,
      addOutline,
      chevronForwardOutline
    });
  }
}
