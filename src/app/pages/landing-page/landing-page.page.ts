import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar, IonButtons, IonButton, IonIcon } from "@ionic/angular/standalone";
import { RouterLink } from "@angular/router";
import { AuthService } from "src/app/services/auth/auth.service";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.page.html",
  styleUrls: ["./landing-page.page.scss"],
  standalone: true,
  imports: [IonIcon, IonButton, IonButtons, 
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink
  ],
})
export class LandingPagePage {
  auth = inject(AuthService);
  platform = inject(Platform);
}
