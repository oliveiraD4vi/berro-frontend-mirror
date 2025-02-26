import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-notification-button",
  templateUrl: "./notification-button.component.html",
  styleUrls: ["./notification-button.component.scss"],
  imports: [IonButton, IonIcon, RouterLink],
})
export class NotificationButtonComponent {}
